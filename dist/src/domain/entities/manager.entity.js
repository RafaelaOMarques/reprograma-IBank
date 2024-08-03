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
exports.Manager = void 0;
const ManagerEnum_1 = require("../shared/enuns/ManagerEnum");
const address_entity_1 = require("./address.entity");
const typeorm_1 = require("typeorm");
let Manager = class Manager {
    constructor(name, cpf, telephone, salary, managerType, address, id) {
        this.name = name;
        this.cpf = cpf;
        this.address = address;
        this.telephone = telephone;
        this.salary = salary;
        this.managerType = managerType;
        if (!id) {
            this.id = id;
        }
    }
};
exports.Manager = Manager;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Manager.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manager.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Manager.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address, { nullable: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], Manager.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manager.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Manager.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ManagerEnum_1.ManagerEnum, nullable: false }),
    __metadata("design:type", String)
], Manager.prototype, "managerType", void 0);
exports.Manager = Manager = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Number, String, address_entity_1.Address, String])
], Manager);
//# sourceMappingURL=manager.entity.js.map