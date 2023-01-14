import { Module } from '@nestjs/common';
import { SignupsService } from './signups.service';
import { SignupsController } from './signups.controller';

@Module({
  controllers: [SignupsController],
  providers: [SignupsService]
})
export class SignupsModule {}
