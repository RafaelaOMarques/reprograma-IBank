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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const person_entity_1 = require("./entities/person.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async findAll() {
        return this.personRepository.find();
    }
    async findOne(id) {
        return this.personRepository.findOne({ where: { id } });
    }
    async create(createPersonDto) {
        const newPerson = this.personRepository.create({
            name: createPersonDto.name,
            cpf: createPersonDto.cpf,
            address: createPersonDto.address,
            telephone: createPersonDto.telephone,
            salary: createPersonDto.salary
        });
        return this.personRepository.save(newPerson);
    }
    async patch(id, patchPersonDto) {
        await this.personRepository.update(id, patchPersonDto);
        return this.personRepository.findOne({ where: { id } });
    }
    async update(id, updatePersonDto) {
        await this.personRepository.update(id, updatePersonDto);
        return this.personRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.personRepository.delete({ id });
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(person_entity_1.Person)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PersonService);
//# sourceMappingURL=persons.service.js.map