import { Module } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
import { BusinessController } from '../controllers/business.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from '../../_domain/entities/business.entity';
import { BusinessRepository } from '../../_domain/repositories/business.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessRepository],
  exports: [BusinessService, BusinessRepository],
})
export class BusinessModule {}
