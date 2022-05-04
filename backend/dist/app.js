"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
});
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(':date[iso] :method :url :status :response-time'));
app.use(express_1.default.json());
app.use("/api", routers_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map