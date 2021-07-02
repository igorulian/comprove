import { Request, Response } from "express"


export = {
    async uploadReceipt(req:Request, res:Response){
        try{
            return res.json(req.file)
        }catch{

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