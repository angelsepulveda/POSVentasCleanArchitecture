"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryActive_vo_1 = require("./value-objects/categoryActive.vo");
class Category {
    constructor(categoryProperties) {
        this.active = new categoryActive_vo_1.CategoryActive(true);
        Object.assign(this, categoryProperties);
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
        this.active = new categoryActive_vo_1.CategoryActive(false);
    }
    update(fields) {
        Object.assign(this, fields);
    }
}
exports.default = Category;
//# sourceMappingURL=category.js.map