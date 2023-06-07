"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const usersRouter = (0, express_1.Router)();
const usersControler = new users_controller_1.default();
usersRouter.post('/users/register', usersControler.registerUser);
usersRouter.post('/users/login', usersControler.loginUser);
exports.default = usersRouter;
