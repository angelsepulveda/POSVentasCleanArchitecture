"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateMapping = void 0;
const dto_interface_1 = require("../../../../../../shared/interfaces/dto.interface");
class CategoryUpdateMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            id: data.id.value,
        };
    }
}
exports.CategoryUpdateMapping = CategoryUpdateMapping;
//# sourceMappingURL=categoryUpdate.dto.js.map