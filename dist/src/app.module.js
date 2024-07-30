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
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [persons_module_1.PersonsModule, manager_module_1.ManagerModule, account_module_1.AccountModule, business_module_1.BusinessModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'data.db',
                entities: [person_entity_1.Person, business_entity_1.Business],
                synchronize: true,
            })],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map