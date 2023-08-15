"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandUpdaterMapping = void 0;
const dto_interface_1 = require("../../../../../shared/interfaces/dto.interface");
class BrandUpdaterMapping extends dto_interface_1.DTO {
    execute(data) {
        return {
            name: data.name.value,
            description: data.description.value,
            id: data.id.value,
        };
    }
}
exports.BrandUpdaterMapping = BrandUpdaterMapping;
//# sourceMappingURL=brandUpdater.dto.js.map