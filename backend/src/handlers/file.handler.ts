import { Request, Response } from "express";
import {Model} from 'mongoose'
import { FileModel, IFile } from "../models/file";

const File:Model<IFile> = FileModel

type fileType = {
    originalname:string,
    location:string,
    mimetype:string,
    ownerid:string,
    category:string,
    title:string ,
}

type searchTermType = {
    ownerid: string;
    category: string;
} | {
    ownerid: string;
}

async function handleList(req:Request, res:Response){
    const {category} = req.params
    const userid:string = req.userid

    const searchTerm:searchTermType = category ? {ownerid: userid, category} : {ownerid: userid}

    const files:IFile[] = await File.find(searchTerm)

    return res.status(200).send(files)
}   

async function handleUpload(req:Request, res:Response){
    const {category,title} = req.query
    
    const categorytxt:string|null = category ? category.toString() : undefined
    const titletxt:string|null = title ? title.toString() : undefined

    const {originalname, location, mimetype} = req.file

        const newFileData:fileType = {
            originalname,
            location,
            mimetype,
            category: categorytxt,
            title: titletxt,
            ownerid: req.userid
        }

    const newFile:IFile = await File.create(newFileData)

    return res.status(200).send(newFile)
}   

export {handleList, handleUpload}