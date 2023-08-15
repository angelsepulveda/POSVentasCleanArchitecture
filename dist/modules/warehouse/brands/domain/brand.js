"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brandActive_vo_1 = require("./valueObjects/brandActive.vo");
class Brand {
    constructor(brandProperties) {
        this.active = new brandActive_vo_1.BrandActive(true);
        Object.assign(this, brandProperties);
    }
    toPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value,
            description: this.description.value,
            active: this.active.value
        };
    }
    properties() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            active: this.active
        };
    }
    delete() {
        this.active = new brandActive_vo_1.BrandActive(false);
    }
    update(fields) {
        Object.assign(this, fields);
    }
}
exports.default = Brand;
//# sourceMappingURL=brand.js.map