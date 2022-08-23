import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //Get details about "me"
  //Route guarded by JwtGuard
  //Handled by @GetUser decorator in auth module
  @Get('me')
  @UseGuards(JwtGuard)
  getMe(@GetUser() user: User) {
    return { user };
  }

  //Get details about user by id
  //Route guarded by JwtGuard
  @Get(':id')
  @UseGuards(JwtGuard)
  getAll(@Param('id', ParseIntPipe) id) {
    return this.userService.getById(id);
  }
}
