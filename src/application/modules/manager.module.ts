import { Module } from '@nestjs/common';
import { ManagerService } from '../services/manager.service';
import { ManagerController } from '../controllers/manager.controller';
import { Manager } from '../../_domain/entities/manager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerRepository } from '../../_domain/repositories/manager.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Manager])],
  controllers: [ManagerController],
  providers: [ManagerService, ManagerRepository],
  exports:[ManagerService, ManagerRepository]
})
export class ManagerModule {}
