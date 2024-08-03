import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import { Person } from 'src/_domain/entities/person.entity';
import { Business } from 'src/_domain/entities/business.entity';
import { Address } from 'src/_domain/entities/address.entity';
import { Manager } from 'src/_domain/entities/manager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Person, Business, Address, Manager],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Person, Business, Address, Manager]),
  ],
  exports: [TypeOrmModule],
})
export class DataSourceModule {}