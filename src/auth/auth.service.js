import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    
    async signup() {
        return {msg:'signup'}
    }

    async signin() {
        return {msg:'signin'}
    }
}