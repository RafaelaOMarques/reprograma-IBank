"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepadapter = void 0;
const address_entity_1 = require("../../../../domain/entities/address.entity");
class ViaCepadapter {
    static convertViaCEPAddress(address) {
        return new address_entity_1.Address(address.cep, address.logradouro, address.bairro, address.localidade, address.uf, address.complemento);
    }
}
exports.ViaCepadapter = ViaCepadapter;
//# sourceMappingURL=via-cep.adapter.js.map