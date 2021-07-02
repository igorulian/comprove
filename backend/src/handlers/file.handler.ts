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
    const userid:string = req.userid
    
    const files:IFile[] = await File.find({ownerid: userid})

    return res.status(200).send(files)
}   

async function handleUpload(req:Request, res:Response){
    const {originalname, location, mimetype} = req.file

        const newFileData:fileType = {
            originalname,
            location,
            mimetype,
            ownerid: req.userid
        }

    const newFile:IFile = await File.create(newFileData)

    return res.status(200).send(newFile)
}   

export {handleList, handleUpload}