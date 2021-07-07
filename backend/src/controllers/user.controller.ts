import { Request, Response } from "express"
import { handleCreate, handleList, handleRemove } from "../handlers/user.handler"

export = {
    async createCategory(req:Request, res:Response){
        try{     
            return await handleCreate(req, res)
        }catch{
            return res.status(400).send({error: 'Erro ao criar categoria'})
        }
    },
    async removeCategory(req:Request, res:Response){
        try{
            return await handleRemove(req, res)
        }catch{
            return res.status(400).send({error: 'Erro ao remover categoria'})
         }
    },
    async listCategory(req:Request, res:Response){
        try{
            return await handleList(req, res)
        }catch{
            return res.status(400).send({error: 'Erro ao listar categorias'})
         }
    },
}
