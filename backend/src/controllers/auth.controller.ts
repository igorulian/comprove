import { Request, Response } from "express";


export = {
    async login(req:Request, res:Response){
        try{
            const {password,email} = req.body

            if(!password || !email)
                return res.status(400).send({error: 'Error, missing params'})

            res.send({
                email, 
                password
            })
        }catch{
            res.status(400).send({error: 'Authentication failed'})
        }
    },
    async register(req:Request, res:Response){
        try{
            return res.json({msg: "Controooler register"})
        }catch{
            return res.status(400)
        }
    }
}