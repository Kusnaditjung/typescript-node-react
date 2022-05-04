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
exports.logout = exports.login = void 0;
const token_1 = __importDefault(require("../models/token"));
const crypto_1 = require("crypto");
const users = [
    { "name": "kusnadi", "password": "kusnadi" },
    { "name": "laurensia", "password": "laurensia" }
];
const tokens = [];
const login = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.body;
    console.log(JSON.stringify(user));
    let authenticatedUsers = users.filter(u => u.name === user.name && u.password === user.password);
    if (authenticatedUsers.length === 1) {
        let filteredTokens = tokens.filter(t => t.name === authenticatedUsers[0].name);
        if (filteredTokens.length === 0) {
            let token = new token_1.default(user.name, (0, crypto_1.randomUUID)().toString());
            tokens.push(token);
            resp.json(token);
        }
        else if (filteredTokens.length == 1) {
            resp.json(filteredTokens[0]);
        }
        else {
            throw 'Illegal state exception';
        }
    }
    else {
        resp.status(403).json(new Error("Login is not valid"));
    }
});
exports.login = login;
const logout = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.body;
    let removeIndex = tokens.findIndex(t => t.name === user.name);
    if (removeIndex > -1) {
        tokens.splice(removeIndex, 1);
    }
    resp.sendStatus(200);
});
exports.logout = logout;
//# sourceMappingURL=user.js.map