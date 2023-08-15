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
exports.MiddlewareUpdater = exports.MiddlewareCreator = exports.MiddlewareFinder = void 0;
const class_validator_1 = require("class-validator");
const validationMessage_1 = __importDefault(require("../../../../../../helpers/validationMessage"));
const brandCreator_validator_1 = require("../validators/brandCreator.validator");
const brandFinder_validator_1 = require("../validators/brandFinder.validator");
const brandUpdater_validator_1 = require("../validators/brandUpdater.validator");
class BrandMiddleware {
    static ValidateFinder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const brandListOneValidator = new brandFinder_validator_1.BrandFinderValidator();
            brandListOneValidator.id = id;
            const errors = yield (0, class_validator_1.validate)(brandListOneValidator);
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
            const brandCreatorValidator = new brandCreator_validator_1.BrandCreatorValidator();
            brandCreatorValidator.name = name;
            brandCreatorValidator.description = description;
            const errors = yield (0, class_validator_1.validate)(brandCreatorValidator);
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
            const brandUpdaterValidator = new brandUpdater_validator_1.BrandUpdaterValidator();
            brandUpdaterValidator.id = id;
            brandUpdaterValidator.name = name;
            brandUpdaterValidator.description = description;
            const errors = yield (0, class_validator_1.validate)(brandUpdaterValidator);
            if (errors.length > 0) {
                console.log(errors);
                res.status(400).json({ error: 'Invalid request' });
                return next(new Error('Invalid request'));
            }
            next();
        });
    }
}
exports.MiddlewareFinder = [
    BrandMiddleware.ValidateFinder,
];
exports.MiddlewareCreator = [
    BrandMiddleware.ValidateCreator,
];
exports.MiddlewareUpdater = [
    BrandMiddleware.ValidateUpdater,
];
//# sourceMappingURL=brandValidator.middleware.js.map