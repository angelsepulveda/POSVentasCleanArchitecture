"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDeleterMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class CategoryDeleterMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.CategoryDeleterMapping = CategoryDeleterMapping;
//# sourceMappingURL=categoryDeleter.dto.js.map