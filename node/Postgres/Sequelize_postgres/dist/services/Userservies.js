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
exports.getAllUsers = exports.createUser = void 0;
const User_1 = require("../models/User");
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.create(userData); // Type assertion to bypass type checking
        return user;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error creating user: ' + error.message);
        }
        else {
            throw new Error('Unexpected error');
        }
    }
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.findAll();
        return users;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching users: ' + error.message);
        }
        else {
            throw new Error('Unexpected error');
        }
    }
});
exports.getAllUsers = getAllUsers;
