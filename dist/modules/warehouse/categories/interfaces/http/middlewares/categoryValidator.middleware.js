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
exports.MiddlewareUpdater = exports.MiddlewareCreator = exports.MiddlewareListOne = void 0;
const class_validator_1 = require("class-validator");
const validationMessage_1 = __importDefault(require("../../../../.:/../../../helpers/validationMessage"));
const categoryCreator_validator_1 = require("../validators/categoryCreator.validator");
const categoryListOne_validator_1 = require("../validators/categoryListOne.validator");
const categoryUpdater_validator_1 = require("../validators/categoryUpdater.validator");
class CategoryMiddleware {
    static ValidateListOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoryListOneValidator = new categoryListOne_validator_1.CategoryListOneValidator();
            categoryListOneValidator.id = id;
            const errors = yield (0, class_validator_1.validate)(categoryListOneValidator);
            if (errors.length > 0) {
                const errorMessages = (0, validationMessage_1.default)(errors);
                res.status(400).json({ errorMessages });
                return next(new Error('Invalid request'));
            }
            next();
        });
    }
    static ValidateCreator(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description } = req.body;
            const categoryCreatorValidator = new categoryCreator_validator_1.CategoryCreatorValidator();
            categoryCreatorValidator.name = name;
            categoryCreatorValidator.description = description;
            const errors = yield (0, class_validator_1.validate)(categoryCreatorValidator);
            if (errors.length > 0) {
                const errorMessages = (0, validationMessage_1.default)(errors);
                res.status(400).json({ errorMessages });
                return next(new Error('Invalid request'));
            }
            next();
        });
    }
    static ValidateUpdater(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, description } = req.body;
            const categoryUpdaterValidator = new categoryUpdater_validator_1.CategoryUpdaterValidator();
            categoryUpdaterValidator.id = id;
            categoryUpdaterValidator.name = name;
            categoryUpdaterValidator.description = description;
            const errors = yield (0, class_validator_1.validate)(categoryUpdaterValidator);
            if (errors.length > 0) {
                console.log(errors);
                res.status(400).json({ error: 'Invalid request' });
                return next(new Error('Invalid request'));
            }
            next();
        });
    }
}
exports.MiddlewareListOne = [
    CategoryMiddleware.ValidateListOne,
];
exports.MiddlewareCreator = [
    CategoryMiddleware.ValidateCreator,
];
exports.MiddlewareUpdater = [
    CategoryMiddleware.ValidateUpdater,
];
//# sourceMappingURL=categoryValidator.middleware.js.map