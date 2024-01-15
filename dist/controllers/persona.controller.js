"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//persona eh o nome da tabela criada no banco de dados
const getPersonas = (req, res) => {
    connection_1.default.query('SELECT * FROM persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM persona WHERE idpersona = ?', id, (err, data) => {
        if (err)
            throw err;
        console.log(data[0]);
        res.json(data[0]);
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM persona WHERE idpersona = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'persona eliminada com exito'
        });
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO persona SET ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'persona agregada com sucesso'
        });
    });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    connection_1.default.query('UPDATE persona SET ? WHERE idpersona = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Persona atualizada com sucesso"
        });
    });
};
exports.putPersona = putPersona;
