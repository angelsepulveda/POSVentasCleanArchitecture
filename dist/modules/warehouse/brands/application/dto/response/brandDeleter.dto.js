"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandDeleterMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class BrandDeleterMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.BrandDeleterMapping = BrandDeleterMapping;
//# sourceMappingURL=brandDeleter.dto.js.map