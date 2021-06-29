import { Request, Response } from "express";
import { handleLogin, handleRegister } from "./auth.handler";

export = {
    async login(req:Request, res:Response){
        try{
            return handleLogin(req,res)
        }catch{
            res.status(400).send({error: 'Falha na autenticação'})
        }
    },
    async register(req:Request, res:Response){
        try{
            return handleRegister(req,res)
        }catch{
            return res.status(400).send({error: 'Falha ao efetuar registro.'})
        }
    }
}