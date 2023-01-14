import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get('/')
  getAll() {
    return this.eventService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.eventService.getEventById(id);
  }
}
