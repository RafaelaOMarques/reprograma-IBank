"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const persons_service_1 = require("../src/_application/services/persons.service");
const persons_controller_1 = require("../src/_application/controllers/persons.controller");
describe('PersonsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [persons_controller_1.PersonController],
            providers: [persons_service_1.PersonService],
        }).compile();
        controller = module.get(persons_controller_1.PersonController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=persons.controller.spec.js.map