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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://jsonplaceholder.typicode.com/posts/1");
        res.json({ title: response.data.title });
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://jsonplaceholder.typicode.com/posts", {
            params: { id: req.query.id }
        });
        res.send(response.data);
    }
    catch (error) {
        console.log(error);
    }
}));
router.post("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post("https://jsonplaceholder.typicode.com/posts", {
            title: 'Our title',
            body: "This is test body",
            userId: 1
        });
        res.send(response.data);
    }
    catch (error) {
        console.log(error);
    }
}));
router.put("/data/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            title: 'Our title',
            body: "This is test body",
            userId: 1
        });
        res.send(response.data);
    }
    catch (error) {
        console.log(error);
    }
}));
router.delete("/data/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.send("Data deleted successfully");
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/headers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://jsonplaceholder.typicode.com/posts", {
            headers: { 'Content-type': 'application/json' }
        });
        res.send(response.data);
    }
    catch (error) {
        console.log(error);
    }
}));
router.post("/headers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post("https://jsonplaceholder.typicode.com/posts", {
            title: " ",
            body: " ",
            userId: 1,
            withCredentials: false,
            auth: {
                username: "",
                password: ""
            }
        }, {
            headers: { 'Content-type': 'application/json' }
        });
        res.send("Posted data with header");
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/concurrent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promise1 = axios_1.default.get("https://jsonplaceholder.typicode.com/users/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });
        const promise2 = axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });
        const promise3 = axios_1.default.get("https://jsonplaceholder.typicode.com/posts/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });
        const [response1, response2, response3] = yield Promise.all([promise1, promise2, promise3]);
        const combinedData = {
            postsData: response1.data,
            usersData: response2.data,
            todosData: response3.data
        };
        console.log(combinedData);
        res.send("Concurrent request completed");
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
