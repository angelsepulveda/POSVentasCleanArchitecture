"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdaterValidator = void 0;
const class_validator_1 = require("class-validator");
class CategoryUpdaterValidator {
}
exports.CategoryUpdaterValidator = CategoryUpdaterValidator;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name must not be empty' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Name must not exceed 50 characters' }),
    __metadata("design:type", String)
], CategoryUpdaterValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(1024, { message: 'Description must not exceed 1024 characters' }),
    __metadata("design:type", String)
], CategoryUpdaterValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Id must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Id must not be empty' }),
    (0, class_validator_1.MinLength)(10, { message: 'Id is too short' }),
    __metadata("design:type", String)
], CategoryUpdaterValidator.prototype, "id", void 0);
//# sourceMappingURL=categoryUpdater.validator.js.map