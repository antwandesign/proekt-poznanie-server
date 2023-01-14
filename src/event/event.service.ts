import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.event.findMany();
  }

  getEventById(id: number) {
    return this.prisma.event.findUnique({
      where: {
        id: id,
      },
    });
  }
}
