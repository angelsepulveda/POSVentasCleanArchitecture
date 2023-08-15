"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getErrorMessages(errors) {
    const errorMessages = {};
    errors.forEach((error) => {
        const { property, constraints } = error;
        errorMessages[property] = Object.values(constraints)[0];
    });
    return errorMessages;
}
exports.default = getErrorMessages;
//# sourceMappingURL=validationMessage.js.map