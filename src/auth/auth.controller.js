import { Controller,Dependencies,Post } from '@nestjs/common'
import { AuthService } from './auth.service';

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    
    @Post('signin')
    async signin() {
        return this.authService.signin()
    }

    @Post('signup')
    async signup() {
        return this.authService.signup()
    }
    
}