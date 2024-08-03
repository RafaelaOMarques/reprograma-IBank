"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepValidator = void 0;
class ViaCepValidator {
    static cepHasMinCharacters(zipCode) {
        if (zipCode?.length !== 8) {
            throw new Error('CEP deve conter exatamente 8 números.');
        }
    }
}
exports.ViaCepValidator = ViaCepValidator;
//# sourceMappingURL=via-cep.validator.js.map