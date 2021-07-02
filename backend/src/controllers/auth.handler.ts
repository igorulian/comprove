import { Request, Response } from "express";
import {Model} from 'mongoose'
import {IUser, UserModel} from '../models/user'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'
import bcrypt from 'bcryptjs'

const User:Model<IUser> = UserModel


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret)
}


async function handleLogin(req:Request, res:Response){
    const {password,email} = req.body

    if(!password || !email)
        return res.status(400).send({error: 'Campos inválidos'}) 

    const user:IUser = await User.findOne({email}).select('+password')

    if(!user) 
        return res.status(400).send({error: 'Usuário não encontrado'})

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Senha inválida'})
    
    user.password = undefined

    const response = {
        user,
        token: generateToken({id: user._id})
    }
    return res.status(200).send(response)
}   


async function handleRegister(req:Request, res:Response){
    const {email,username,password} = req.body

    if(!password || !email || !username)
    return res.status(400).send({error: 'Preencha todos os campos'}) 
    
    if(await User.findOne({email}))
        return res.status(400).send({error: 'Usuário já existente'})

    const newUser:IUser = await User.create({email, username, password})

    const response = {
        username: newUser.username,
        email: newUser.email,
        token: generateToken({id: newUser._id})
    }

    return res.status(200).send(response)
}



export {handleLogin, handleRegister}