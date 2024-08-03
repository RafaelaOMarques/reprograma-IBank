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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const person_entity_1 = require("../../domain/entities/person.entity");
const persons_repository_1 = require("../../domain/repositories/persons.repository");
const via_cep_service_1 = require("../../infrastructure/external/third-party/via-cep/via-cep.service");
const persons_validator_1 = require("../../domain/shared/utils/persons.validator");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
        this.persons = [];
    }
    async listPersons() {
        return await this.personRepository.findAll();
    }
    async listPersonById(id) {
        const person = await this.personRepository.findById(id);
        if (!person) {
            throw new Error('Person not found');
        }
        return person;
    }
    async newPerson(name, cpf, telephone, salary, zipCode, complement) {
        persons_validator_1.PersonValidator.verifyCpf(cpf);
        persons_validator_1.PersonValidator.checkCpfAlreadyInUse(this.persons, cpf);
        let address = null;
        if (zipCode) {
            address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            if (complement) {
                address.complement = complement;
            }
        }
        const person = new person_entity_1.Person(name, cpf, telephone, salary);
        person.address = address;
        this.persons.push(person);
        return await this.personRepository.save(person);
    }
    async updatePerson(id, name, cpf, telephone, salary, zipCode) {
        const person = await this.listPersonById(id);
        if (!person) {
            throw new common_1.NotFoundException('Person not found');
        }
        if (person) {
            person.name = name;
            person.cpf = cpf;
            person.telephone = telephone;
            person.salary = salary;
            if (zipCode) {
                person.address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            }
            return await this.personRepository.save(person);
        }
        return null;
    }
    async removePerson(id) {
        await this.personRepository.delete(id);
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [persons_repository_1.PersonRepository])
], PersonService);
//# sourceMappingURL=persons.service.js.map