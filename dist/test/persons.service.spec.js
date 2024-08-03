"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const persons_service_1 = require("../src/application/services/persons.service");
describe('PersonsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [persons_service_1.PersonService],
        }).compile();
        service = module.get(persons_service_1.PersonService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=persons.service.spec.js.map