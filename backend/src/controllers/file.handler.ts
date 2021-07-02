import { Request, Response } from "express";
import {Model} from 'mongoose'
import { FileModel, IFile } from "../models/file";

const File:Model<IFile> = FileModel

type fileType = {
    originalname:string,
    location:string,
    mimetype:string,
    ownerid:string
}

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

    return res.status(200).send({})
}   

async function handleUpload(req:Request, res:Response){
    const {originalname, location, mimetype} = req.file

        const newFileData:fileType = {
            originalname,
            location,
            mimetype,
            ownerid: req.userid
        }

    const newFile = await File.create(newFileData)

    return res.status(200).send(newFile)
}   

export {handleList, handleUpload}