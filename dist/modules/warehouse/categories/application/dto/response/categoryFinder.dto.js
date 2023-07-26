"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFinderMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class CategoryFinderMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.getValue(),
            description: data.description.getValue(),
            id: data.id.getValue(),
        };
    }
}
exports.CategoryFinderMapping = CategoryFinderMapping;
//# sourceMappingURL=categoryFinder.dto.js.map