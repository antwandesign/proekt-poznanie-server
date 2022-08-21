import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';


@Module({
  imports: [AuthModule, UserModule, EventModule],
})
export class AppModule {}
