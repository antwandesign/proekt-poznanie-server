import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignupsService } from './signups.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';

@Controller('signups')
export class SignupsController {
  constructor(private readonly signupsService: SignupsService) {}

  @Post()
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupsService.create(createSignupDto);
  }

  @Get()
  findAll() {
    return this.signupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignupDto: UpdateSignupDto) {
    return this.signupsService.update(+id, updateSignupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signupsService.remove(+id);
  }
}
