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
const persons_module_1 = require("./application/modules/persons.module");
const manager_module_1 = require("./application/modules/manager.module");
const account_module_1 = require("./account/account.module");
const business_module_1 = require("./application/modules/business.module");
const typeorm_module_1 = require("./infrastructure/database/typeorm.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const erros_1 = require("./application/services/erros");
require('dotenv').config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(erros_1.ErrorMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_module_1.DataSourceModule, persons_module_1.PersonsModule, manager_module_1.ManagerModule, business_module_1.BusinessModule, account_module_1.AccountModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map