import { Router } from "express";
import { deletePersona, getPersonas, getPersona, postPersona, putPersona } from "../controllers/persona.controller";

const routerPersonas = Router()

routerPersonas.get( '/', getPersonas)
routerPersonas.get('/:id', getPersona)
routerPersonas.delete('/:id', deletePersona)
routerPersonas.post('/', postPersona)
routerPersonas.put('/:id', putPersona)

export default routerPersonas;




