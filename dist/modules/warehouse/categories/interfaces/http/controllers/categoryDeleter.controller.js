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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const categoryDeleter_1 = __importDefault(require("../../../application/usesCases/categoryDeleter"));
let CategoryDeleterController = class CategoryDeleterController {
    constructor(deleter) {
        this.deleter = deleter;
    }
    async run(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.deleter.run(id);
            res.json(result);
        }
        catch (e) {
            next(e);
        }
    }
};
CategoryDeleterController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(categoryDeleter_1.default)),
    __metadata("design:paramtypes", [categoryDeleter_1.default])
], CategoryDeleterController);
exports.default = CategoryDeleterController;
//# sourceMappingURL=categoryDeleter.controller.js.map