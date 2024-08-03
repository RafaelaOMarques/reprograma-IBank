"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepService = void 0;
const via_cep_validator_1 = require("./via-cep.validator");
const via_cep_adapter_1 = require("./via-cep.adapter");
const axios_1 = __importDefault(require("axios"));
class ViaCepService {
    static async getAddress(zipCode) {
        const zipCodeAdapted = zipCode?.toString().replace(/\D+/g, '');
        via_cep_validator_1.ViaCepValidator.cepHasMinCharacters(zipCodeAdapted);
        try {
            const response = await axios_1.default.get(`https://viacep.com.br/ws/${zipCodeAdapted}/json`);
            const data = await response.data;
            if (data?.erro === true) {
                throw data;
            }
            return via_cep_adapter_1.ViaCepadapter.convertViaCEPAddress(data);
        }
        catch (error) {
            if (error?.erro === true) {
                throw new Error(this.ERROR_CEP_NOT_FOUND);
            }
            throw new Error(this.ERROR_UNEXPECTED);
        }
    }
}
exports.ViaCepService = ViaCepService;
ViaCepService.ERROR_CEP_NOT_FOUND = 'ZipCode not found';
ViaCepService.ERROR_UNEXPECTED = 'Error in request to ViaCEP';
//# sourceMappingURL=via-cep.service.js.map