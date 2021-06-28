import { Request, Response } from "express";
import {Model} from 'mongoose'
import {IUser, UserModel} from '../models/user'

const User:Model<IUser> = UserModel

export = {
    async login(req:Request, res:Response){
        try{
            const {password,email} = req.body

            if(!password || !email)
                return res.status(400).send({error: 'Missing params'}) 

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
            const {email,username,password} = req.body

            if(!password || !email || !username)
            return res.status(400).send({error: 'Missing params'}) 
            
            if(await User.findOne({email}))
                return res.status(400).send({error: 'User already exists'})

            await User.create({email, username, password})

            return res.status(200).send({username, email})
        }catch{
            return res.status(400)
        }
    }
}