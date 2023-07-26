"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryInsertMapping = void 0;
const dto_interface_1 = require("../../../../../../shared/interfaces/dto.interface");
class CategoryInsertMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            id: data.id.value,
        };
    }
}
exports.CategoryInsertMapping = CategoryInsertMapping;
//# sourceMappingURL=categoryInsert.dto.js.map