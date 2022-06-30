"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, DB_DATABASE_TEST, DB_USER, DB_PASS, PORT, SALT_ROUNDS, TOKEN_SECRET, } = process.env;
exports.default = {
    port: PORT,
    host: DB_HOST,
    dbPort: DB_PORT,
    database: NODE_ENV === 'development' ? DB_DATABASE : DB_DATABASE_TEST,
    user: DB_USER,
    password: DB_PASS,
    salt: SALT_ROUNDS,
    tokenSecret: TOKEN_SECRET,
};
