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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const manager_entity_1 = require("../../domain/entities/manager.entity");
const manager_repository_1 = require("../../domain/repositories/manager.repository");
const persons_validator_1 = require("../../domain/shared/utils/persons.validator");
const via_cep_service_1 = require("../../infrastructure/external/third-party/via-cep/via-cep.service");
let ManagerService = class ManagerService {
    constructor(managerRepository) {
        this.managerRepository = managerRepository;
        this.managers = [];
    }
    async listManagers() {
        return await this.managerRepository.findAll();
    }
    async listManagerById(id) {
        const manager = await this.managerRepository.findById(id);
        if (!manager) {
            throw new Error('Person not found');
        }
        return manager;
    }
    async newManager(name, cpf, telephone, salary, managerType, zipCode, complement, id) {
        persons_validator_1.PersonValidator.verifyCpf(cpf);
        persons_validator_1.PersonValidator.checkCpfAlreadyInUse(this.managers, cpf);
        let address = null;
        if (zipCode) {
            address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            if (complement) {
                address.complement = complement;
            }
        }
        const manager = new manager_entity_1.Manager(name, cpf, telephone, salary, managerType);
        manager.address = address;
        this.managers.push(manager);
        return await this.managerRepository.save(manager);
    }
    ;
    async updateManager(id, name, cpf, telephone, salary, managerType, zipCode, complement) {
        const manager = await this.listManagerById(id);
        if (!manager) {
            throw new Error('Manager not found');
        }
        if (manager) {
            manager.name = name;
            manager.cpf = cpf;
            manager.telephone = telephone;
            manager.salary = salary;
            manager.managerType = managerType;
            if (zipCode) {
                manager.address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            }
            return await this.managerRepository.save(manager);
        }
        return null;
    }
    async removeManager(id) {
        await this.managerRepository.delete(id);
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [manager_repository_1.ManagerRepository])
], ManagerService);
//# sourceMappingURL=manager.service.js.map