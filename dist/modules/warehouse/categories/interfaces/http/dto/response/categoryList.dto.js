"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryListMapping = void 0;
const dto_interface_1 = require("../../../../../../shared/interfaces/dto.interface");
class CategoryListMapping extends dto_interface_1.DTO {
    execute(data) {
        return data.map((category) => {
            return {
                name: category.name,
                description: category.description,
                id: category.id.value,
            };
        });
    }
}
exports.CategoryListMapping = CategoryListMapping;
//# sourceMappingURL=categoryList.dto.js.map