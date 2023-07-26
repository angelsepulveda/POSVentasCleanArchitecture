"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDeleteMapping = void 0;
const dto_interface_1 = require("../../../../../../shared/interfaces/dto.interface");
class CategoryDeleteMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            id: data.id.value,
        };
    }
}
exports.CategoryDeleteMapping = CategoryDeleteMapping;
//# sourceMappingURL=categoryDelete.dto.js.map