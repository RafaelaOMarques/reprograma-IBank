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
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const business_entity_1 = require("../../domain/entities/business.entity");
const business_repository_1 = require("../../domain/repositories/business.repository");
const persons_validator_1 = require("../../domain/shared/utils/persons.validator");
const via_cep_service_1 = require("../../infrastructure/external/third-party/via-cep/via-cep.service");
let BusinessService = class BusinessService {
    constructor(businessRepository) {
        this.businessRepository = businessRepository;
        this.businesses = [];
    }
    async listBusiness() {
        return this.businessRepository.findAll();
    }
    async listBusinessById(id) {
        return this.businessRepository.findById(id);
    }
    async newBusiness(name, cnpj, telephone, billing, zipCode, complement) {
        persons_validator_1.PersonValidator.verifyCnpj(cnpj);
        persons_validator_1.PersonValidator.checkCnpjAlreadyInUse(this.businesses, cnpj);
        let address = null;
        if (zipCode) {
            address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            if (complement) {
                address.complement = complement;
            }
        }
        const business = new business_entity_1.Business(name, cnpj, telephone, billing);
        business.address = address;
        this.businesses.push(business);
        return await this.businessRepository.save(business);
    }
    async updateBusiness(id, name, cnpj, telephone, billing, zipCode) {
        const business = await this.listBusinessById(id);
        if (!business) {
            throw new Error('Business not found');
        }
        if (business) {
            business.name = name;
            business.cnpj = cnpj;
            business.telephone = telephone;
            business.billing = billing;
            if (zipCode) {
                business.address = await via_cep_service_1.ViaCepService.getAddress(zipCode);
            }
            return await this.businessRepository.save(business);
        }
        return null;
    }
    async removeBusiness(id) {
        await this.businessRepository.delete(id);
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [business_repository_1.BusinessRepository])
], BusinessService);
//# sourceMappingURL=business.service.js.map