import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //Make post request with proper details to /auth/signup to sign up the user.
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  //Make post request with proper details to /auth/signin to sign in.
  //Return HTTP code 200
  @HttpCode(HttpStatus.OK)
  //Make post request.
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    //Return JWT.
    return this.authService.signin(dto);
  }
}
