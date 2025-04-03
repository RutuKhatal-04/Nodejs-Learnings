"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routers/index"));
require("./middleware/axiosIntercept");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', index_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
