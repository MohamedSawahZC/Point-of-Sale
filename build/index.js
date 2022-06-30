"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const database_1 = __importDefault(require("./database"));
const PORT = config_1.default.port || 3000;
const address = `0.0.0.0:${PORT}`;
database_1.default.connect().then((client) => {
    return client
        .query('SELECT NOW()')
        .then((res) => {
        client.release();
        console.log(res.rows);
    })
        .catch((error) => {
        console.log(error);
    });
});
app_1.default.listen(PORT, () => {
    console.log(`starting app on  ${address}`);
});
