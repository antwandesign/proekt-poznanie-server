import {
  Controller,
  Dependencies,
  Post,
  Bind,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body) {
    return this.authService.signup();
  }

  @Post('signin')
  signin(@Body() body) {
    return this.authService.signin();
  }
}
