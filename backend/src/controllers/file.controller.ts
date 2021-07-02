import { Request, Response } from "express"
import { handleUpload, handleList } from "../handlers/file.handler"

export = {
    async uploadReceipt(req:Request, res:Response){
        try{
            const newFile = await handleUpload(req,res)
            return newFile
        }catch{
            return res.status(400).send({error: 'Erro ao enviar arquivo'})
        }
    },
    async listReceipts(req:Request, res:Response){
        try{
            return res.json({msg: "List"})
        }catch{
         }
    },
    async showReceipt(req:Request, res:Response){
        try {
            return res.json({msg: "Show"})
        }catch {
            
        }
    }
}