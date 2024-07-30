"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
let ManagerService = class ManagerService {
    create(createManagerDto) {
        return 'This action adds a new manager';
    }
    findAll() {
        return `This action returns all manager`;
    }
    findOne(id) {
        return `This action returns a #${id} manager`;
    }
    update(id, updateManagerDto) {
        return `This action updates a #${id} manager`;
    }
    remove(id) {
        return `This action removes a #${id} manager`;
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)()
], ManagerService);
//# sourceMappingURL=manager.service.js.map