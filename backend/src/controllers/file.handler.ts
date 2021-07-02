import { Request, Response } from "express";
import {Model} from 'mongoose'
import { FileModel, IFile } from "../models/file";

const File:Model<IFile> = FileModel

async function handleList(req:Request, res:Response){
    // const {password,email} = req.body

    // if(!password || !email)
    //     return res.status(400).send({error: 'Campos inválidos'}) 

    // const file:IFile = await File.findOne({email}).select('+password')

    // if(!user) 
    //     return res.status(400).send({error: 'Usuário não encontrado'})

    // if(!await bcrypt.compare(password, user.password))
    //     return res.status(400).send({error: 'Senha inválida'})
    
    // user.password = undefined

    // return res.status(200).send(response)
}   

async function handleUpload(req:Request, res:Response){
    const data = {
        originalname: '',
        filepath: '',
        ownerid: req.user.id
    }

    const newFile:IFile = await File.create({data})

    return res.status(200).send(newFile)
}   