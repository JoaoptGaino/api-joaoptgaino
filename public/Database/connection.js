"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var db = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'pizzariabanco.mysql.dbaas.com.br',
        user: 'pizzariabanco',
        password: 'Joaopedro-321',
        database: 'pizzariabanco',
        port: 3306
    },
    useNullAsDefault: true,
});
exports.default = db;
