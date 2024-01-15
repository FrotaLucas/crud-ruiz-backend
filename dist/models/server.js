"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_routes_1 = __importDefault(require("../routes/persona.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        console.log('PORT from process.env:', process.env.PORT);
        this.app = (0, express_1.default)();
        const portString = process.env.PORT || '4500';
        this.port = parseInt(portString, 10);
        this.middelwares();
        this.routes();
        this.connectionDb();
    }
    listen() {
        this.app.listen(this.port, () => {
            //console.log('Loaded environment variables:', process.env);
            console.log('Application correndo por el puerto', this.port);
        });
    }
    routes() {
        this.app.use('/api/personas', persona_routes_1.default);
    }
    //transforma body
    middelwares() {
        //send body
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    connectionDb() {
        connection_1.default.connect((err) => {
            if (err) {
                throw err;
                console.log('Erro ao conectar a base de dados');
            }
        });
    }
}
exports.default = Server;
