"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCreatorMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class BrandCreatorMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.BrandCreatorMapping = BrandCreatorMapping;
//# sourceMappingURL=brandCreator.dto.js.map