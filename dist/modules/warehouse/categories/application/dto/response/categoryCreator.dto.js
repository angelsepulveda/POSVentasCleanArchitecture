"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreatorMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class CategoryCreatorMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.getValue(),
            description: data.description.getValue(),
            id: data.id.getValue(),
        };
    }
}
exports.CategoryCreatorMapping = CategoryCreatorMapping;
//# sourceMappingURL=categoryCreator.dto.js.map