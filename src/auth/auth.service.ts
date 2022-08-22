import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    //Generate password hash
    const hash = await argon.hash(dto.password);
    //Save new user to database
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          password: hash,
        },
      });

      delete user.password;
      //RETURN USER
      return user;

      //ERROR HANDLING
    } catch (error) {
      //Check if error is from Prisma
      if (error instanceof PrismaClientKnownRequestError) {
        //Check error code and display appropriate message
        if (error.code === 'P2002') {
          throw new ForbiddenException('User already exists');
        }
        //Catch all Prisma Error
        throw error;
      }
      //Catch all Error
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    //Find User
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    //Error out if user not found
    if (!user) throw new ForbiddenException('User not found');

    //Compare password with hash
    const valid = await argon.verify(user.password, dto.password);

    console.log(this.config.get('JWT_SECRET'));

    //Error out if password is incorrect
    if (!valid) throw new ForbiddenException('Invalid password');

    //Generate JWT
    //Return JWT
    return user;
  }
}
