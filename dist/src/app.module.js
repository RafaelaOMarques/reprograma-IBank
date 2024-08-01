"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const persons_module_1 = require("./persons/persons.module");
const manager_module_1 = require("./manager/manager.module");
const account_module_1 = require("./account/account.module");
const typeorm_1 = require("@nestjs/typeorm");
const person_entity_1 = require("./persons/entities/person.entity");
const business_entity_1 = require("./business/entities/business.entity");
const business_module_1 = require("./business/business.module");
const address_entity_1 = require("./address/address.entity");
require('dotenv').config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                database: process.env.DATABASE_NAME,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                entities: [person_entity_1.Person, business_entity_1.Business, address_entity_1.Address],
                synchronize: true,
            }), persons_module_1.PersonsModule, manager_module_1.ManagerModule, account_module_1.AccountModule, business_module_1.BusinessModule,],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map