"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const brand_1 = __importDefault(require("./brand"));
const brandActive_vo_1 = require("./valueObjects/brandActive.vo");
const brandDescription_vo_1 = require("./valueObjects/brandDescription.vo");
const brandId_vo_1 = require("./valueObjects/brandId.vo");
const brandName_vo_1 = require("./valueObjects/brandName.vo");
class BrandFactory {
    create(name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const brandProperties = {
                name: new brandName_vo_1.BrandName(name),
                id: new brandId_vo_1.BrandId((0, uuid_1.v4)()),
                description: new brandDescription_vo_1.BrandDescription(description),
                active: new brandActive_vo_1.BrandActive(true)
            };
            const brand = new brand_1.default(brandProperties);
            return brand;
        });
    }
}
exports.default = BrandFactory;
//# sourceMappingURL=brandFactory.js.map