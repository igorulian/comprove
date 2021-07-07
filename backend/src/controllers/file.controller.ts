import { Request, Response } from "express"
import { handleUpload, handleList, handleRemove, handleEdit } from "../handlers/file.handler"

export = {
    async uploadReceipt(req:Request, res:Response){
        try{     
            return await handleUpload(req, res)
        }catch{
            return res.status(400).send({error: 'Erro ao enviar arquivo'})
        }
    },
    async listReceipts(req:Request, res:Response){
        try{
            return await handleList(req, res)
        }catch{
            return res.status(400).send({error: 'Erro ao listar arquivos'})
         }
    },
    async showReceipt(req:Request, res:Response){
        try {
            return res.json({msg: "Show"})
        }catch {
            return res.status(400).send({error: 'Erro ao mostrar arquivo'})
        }
    },    
    async removeReceipt(req:Request, res:Response){ 
        try{
            return await handleRemove(req,res)
        }catch{
            return res.status(400).send({error: 'Erro ao remover arquivos'})
         }
    },
    async editReceipt(req:Request, res:Response){
        try{
            return await handleEdit(req,res)
        }catch{
            return res.status(400).send({error: 'Erro ao editar arquivos'})
         }
    },
}
