"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandFinderMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class BrandFinderMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.BrandFinderMapping = BrandFinderMapping;
//# sourceMappingURL=brandFinder.dto.js.map