import { Request, Response } from "express"


export = {
    async uploadReceipt(req:Request, res:Response){
        try{
            const {originalname, location, mimetype} = req.file

            return res.json(req.file)
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