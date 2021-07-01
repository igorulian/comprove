import { Request, Response } from "express";
import { sendMail } from "../services/mail";
import { handleLogin, handleRegister } from "./auth.handler";

export = {
    async login(req:Request, res:Response){
        try{
            return await handleLogin(req,res)
        }catch{
            return res.status(400).send({error: 'Falha na autenticação'})
        }
    },
    async register(req:Request, res:Response){
        try{
            const handler:Response = await handleRegister(req,res)

            if(handler.statusCode === 200)
                sendMail(req.body.email, 'register')

            return handler
        }catch{
            return res.status(400).send({error: 'Falha ao efetuar registro.'})
        }
    }
}