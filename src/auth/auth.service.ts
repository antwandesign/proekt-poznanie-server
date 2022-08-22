import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async signup() {
    return { msg: 'signup' };
  }

  async signin() {
    return { msg: 'signin' };
  }
}
