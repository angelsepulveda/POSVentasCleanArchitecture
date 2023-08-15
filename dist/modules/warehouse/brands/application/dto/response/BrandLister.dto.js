"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandListerMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class BrandListerMapping extends dto_interface_1.DTO {
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
exports.BrandListerMapping = BrandListerMapping;
//# sourceMappingURL=BrandLister.dto.js.map