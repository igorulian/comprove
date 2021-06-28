import { Request, Response } from "express"


export = {
    async test(req:Request, res:Response){
        try{
            return res.json({msg: "Nova mensagem com controller"})
        }catch{
            return res.json({msg: "Erro"})
         }
    }
}