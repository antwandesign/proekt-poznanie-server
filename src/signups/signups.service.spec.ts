import { Test, TestingModule } from '@nestjs/testing';
import { SignupsService } from './signups.service';

describe('SignupsService', () => {
  let service: SignupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignupsService],
    }).compile();

    service = module.get<SignupsService>(SignupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
