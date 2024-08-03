"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceModule = void 0;
const common_1 = require("@nestjs/common");
const person_entity_1 = require("../../_domain/entities/person.entity");
const business_entity_1 = require("../../_domain/entities/business.entity");
const address_entity_1 = require("../../_domain/entities/address.entity");
const manager_entity_1 = require("../../_domain/entities/manager.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DataSourceModule = class DataSourceModule {
};
exports.DataSourceModule = DataSourceModule;
exports.DataSourceModule = DataSourceModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => ({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: process.env.DATABASE_USERNAME,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE_NAME,
                    entities: [person_entity_1.Person, business_entity_1.Business, address_entity_1.Address, manager_entity_1.Manager],
                    synchronize: true,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([person_entity_1.Person, business_entity_1.Business, address_entity_1.Address, manager_entity_1.Manager]),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], DataSourceModule);
//# sourceMappingURL=typeorm.module.js.map