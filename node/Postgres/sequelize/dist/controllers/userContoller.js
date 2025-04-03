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
exports.deleteUser = exports.updateData = exports.getParticularUser = exports.getUsers = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and email required" });
        return;
    }
    try {
        const user = yield userModel_1.default.create({ name, email });
        res.status(200).json(user);
        return;
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create user" });
        return;
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.findAll();
        res.status(200).json(users);
        return;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUsers = getUsers;
const getParticularUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield userModel_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({ error: "user not found" });
        }
        res.status(200).json(user);
        return;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getParticularUser = getParticularUser;
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const user = yield userModel_1.default.findByPk(id);
        if (!user) {
            res.status(500).json({ error: "No such user" });
            return;
        }
        user.name = name;
        yield user.save();
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateData = updateData;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield userModel_1.default.findByPk(id);
        if (!user) {
            res.status(500).json({ error: "No such user" });
            return;
        }
        yield user.destroy();
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteUser = deleteUser;
