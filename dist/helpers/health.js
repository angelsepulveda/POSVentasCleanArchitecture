"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterHealth {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
        this.mounthRoutes();
    }
    mounthRoutes() {
        this.expressRouter.get('/', (req, res) => {
            res.send('all is ok');
        });
    }
}
exports.default = new RouterHealth().expressRouter;
//# sourceMappingURL=health.js.map