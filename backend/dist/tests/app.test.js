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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('user tests', () => {
    test('login success', () => __awaiter(void 0, void 0, void 0, function* () {
        var res = yield (0, supertest_1.default)(app_1.default)
            .post('/api/user/login')
            .send({ "name": "kusnadi", "password": "kusnadi" });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("kusnadi");
    }));
    test('login failure', () => __awaiter(void 0, void 0, void 0, function* () {
        var res = yield (0, supertest_1.default)(app_1.default)
            .post('/api/user/login')
            .send({ "name": "kus", "password": "kusnadi" });
        expect(res.statusCode).toEqual(403);
    }));
});
//# sourceMappingURL=app.test.js.map