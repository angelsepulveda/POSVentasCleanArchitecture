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
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const database_bootstrap_1 = __importDefault(require("./bootstrap/database.bootstrap"));
const server_bootstrap_1 = __importDefault(require("./bootstrap/server.bootstrap"));
const serverBootstrap = new server_bootstrap_1.default(app_1.default);
const databaseBootstrap = new database_bootstrap_1.default();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield databaseBootstrap.initialize(), console.log('Database started successfully');
        yield serverBootstrap.initialize();
    }
    catch (error) {
        console.log(error);
    }
}))();
//# sourceMappingURL=index.js.map