"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const manager_entity_1 = require("../entities/manager.entity");
let ManagerRepository = class ManagerRepository {
    constructor(managerRepository) {
        this.managerRepository = managerRepository;
    }
    async findAll() {
        return await this.managerRepository.find({ relations: ['address'] });
    }
    async findById(id) {
        return await this.managerRepository.findOne({
            where: { id },
            relations: ['address']
        });
    }
    async save(manager) {
        return await this.managerRepository.save(manager);
    }
    async delete(id) {
        const result = await this.managerRepository.delete({ id });
        return result.affected > 0;
    }
};
exports.ManagerRepository = ManagerRepository;
exports.ManagerRepository = ManagerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(manager_entity_1.Manager)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ManagerRepository);
//# sourceMappingURL=manager.repository.js.map