"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdaterMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class CategoryUpdaterMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.CategoryUpdaterMapping = CategoryUpdaterMapping;
//# sourceMappingURL=categoryUpdater.dto.js.map