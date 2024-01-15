import { Request, Response } from "express";
import connection from '../db/connection'

//persona eh o nome da tabela criada no banco de dados
export const getPersonas = (req: Request, res: Response) => {
  connection.query('SELECT * FROM persona', (err, data) => {
    if(err) throw err;
    res.json(data)
  })
}

export const getPersona = ( req: Request, res: Response) => {
  const { id } = req.params;
  connection.query('SELECT * FROM persona WHERE idpersona = ?', id,(err, data)=>{
    if(err) throw err;
    console.log(data[0])
    res.json(data[0])
  })
}

export const deletePersona = (req: Request, res: Response) => {
  const { id } = req.params;
  connection.query('DELETE FROM persona WHERE idpersona = ?',id, (err, data) => {
    if(err) throw err;
    res.json(
      {
        msg: 'persona eliminada com exito'
      }
    )
  })
}

export const postPersona = (req: Request, res: Response) => {
  const { body } = req;
  connection.query('INSERT INTO persona SET ?', [body], (err, data)=>
  {
    if(err) throw err;
    res.json({
      msg: 'persona agregada com sucesso'
    })
  })
}

export const putPersona = (req: Request, res: Response) => {
  const{ id } = req.params;
  const{ body } = req;
  
  connection.query('UPDATE persona SET ? WHERE idpersona = ?',[body,id], (err,data)=>{
    if(err) throw err;
    res.json({
      msg:"Persona atualizada com sucesso"
    })
  })
}