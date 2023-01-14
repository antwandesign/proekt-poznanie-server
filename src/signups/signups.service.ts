import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';

@Injectable()
export class SignupsService {
  constructor(private prismaService: PrismaService) {}

  //Create new Sign Up
  async create(createSignupDto: CreateSignupDto) {
    const dto = createSignupDto;
    //Make new entry and connect to existing event.
    try {
      const signup = await this.prismaService.signUp.create({
        data: {
          email: dto.email,
          phone: dto.phone,
          name: dto.name,
          event: {
            connect: { id: dto.eventId },
          },
        },
      });
      //RETURN NEW SIGNUP
      return signup;

      //ERROR HANDLING
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        //Signup Already Exists
        if (error.code === 'P2002') {
          throw new ForbiddenException('Already exists');
        }
        //Event Doesn't Exist
        if (error.code === 'P2025') {
          throw new ForbiddenException(`Event doesn't exist`);
        }

        //Catch All Prisma Error
        throw new ForbiddenException(`Unkown Error: ${error.code}`);
      }
      //Catch All Error
      throw error;
    }
  }

  //TODOS

  findAll() {
    return `This action returns all signups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: UpdateSignupDto) {
    return `This action updates a #${id} signup`;
  }

  remove(id: number) {
    return `This action removes a #${id} signup`;
  }
}
