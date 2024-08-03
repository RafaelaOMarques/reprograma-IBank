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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const persons_service_1 = require("../../_application/services/persons.service");
const create_person_dto_1 = require("../../_application/dto/create-person.dto");
const update_person_dto_1 = require("../../_application/dto/update-person.dto");
let PersonController = class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    async listPersons() {
        return await this.personService.listPersons();
    }
    async listPersonById(id) {
        return await this.personService.listPersonById(id);
    }
    async create(createPersonDto) {
        const { name, cpf, telephone, salary, zipCode } = createPersonDto;
        return this.personService.newPerson(name, cpf, telephone, salary, zipCode);
    }
    update(id, updatePersonDto) {
        try {
            return this.personService.updatePerson(id, updatePersonDto.name, updatePersonDto.cpf, updatePersonDto.telephone, updatePersonDto.salary, updatePersonDto.zipcode);
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error.message });
        }
    }
    remove(id) {
        return this.personService.removePerson(id);
    }
};
exports.PersonController = PersonController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "listPersons", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "listPersonById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_person_dto_1.UpdatePersonDto]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "remove", null);
exports.PersonController = PersonController = __decorate([
    (0, common_1.Controller)('person'),
    __metadata("design:paramtypes", [persons_service_1.PersonService])
], PersonController);
//# sourceMappingURL=persons.controller.js.map