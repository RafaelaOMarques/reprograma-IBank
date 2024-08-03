import { Module } from '@nestjs/common';
import { ManagerService } from '../services/manager.service';
import { ManagerController } from '../controllers/manager.controller';
import { Manager } from '../../domain/entities/manager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerRepository } from '../../domain/repositories/manager.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Manager])],
  controllers: [ManagerController],
  providers: [ManagerService, ManagerRepository],
  exports:[ManagerService, ManagerRepository]
})
export class ManagerModule {}
