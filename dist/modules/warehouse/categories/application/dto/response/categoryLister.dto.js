"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryListerMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class CategoryListerMapping extends dto_interface_1.DTO {
    execute(data) {
        return data.map((category) => {
            return {
                name: category.name.value,
                description: category.description.value,
                id: category.id.value,
            };
        });
    }
}
exports.CategoryListerMapping = CategoryListerMapping;
//# sourceMappingURL=categoryLister.dto.js.map