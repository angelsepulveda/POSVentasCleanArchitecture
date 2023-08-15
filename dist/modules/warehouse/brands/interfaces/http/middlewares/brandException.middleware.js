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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandMiddlewareError = void 0;
const domain_exception_1 = require("../../../../../shared/domain/exceptions/domain.exception");
class BrandExceptionMiddleware {
    static DomainExceptionHandler(error, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (error instanceof domain_exception_1.DomainException) {
                let statusCode = 500;
                if (error.name === 'BRAND_NAME_REQUIRED') {
                    statusCode = 400; // Bad Request
                }
                else if (error.name === 'BRAND_NAME_LENGTH_INVALID' || error.name === 'BRAND_DESCRIPTION_LENGTH_INVALID') {
                    statusCode = 422; // Unprocessable Entity
                }
                else if (error.name === 'BRAND_NOT_FOUND') {
                    statusCode = 404; // Not Found
                }
                res.status(statusCode).json({ type: error.name, error: error.message });
            }
            else {
                next(error);
            }
        });
    }
}
exports.BrandMiddlewareError = [
    BrandExceptionMiddleware.DomainExceptionHandler
];
//# sourceMappingURL=brandException.middleware.js.map