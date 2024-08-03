import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from '../src/_application/services/persons.service';
import { PersonController } from '../src/_application/controllers/persons.controller';

describe('PersonsController', () => {
  let controller: PersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    controller = module.get<PersonController>(PersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
