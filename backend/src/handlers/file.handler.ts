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
    const {category,month} = req.query
    const userid:string = req.userid

    const currentYear = new Date().getFullYear()
    console.log(`Ano: ${currentYear}`)

    const CategorySearchTerm:searchTermType = category ? {ownerid: userid, category: category.toString()} : {ownerid: userid}
    const MonthSearchTerm = month ? {"createdAt": {"$gte": new Date(currentYear, parseInt(month.toString())-1, 1),"$lt": new Date(currentYear, parseInt(month.toString())-1, 31)}} : null


    const SearchTerm = {
        ...CategorySearchTerm,
        ...MonthSearchTerm
    }


    const files:IFile[] = await File.find(SearchTerm).select('+createdAt')

    return res.status(200).send(files)
}   

async function handleUpload(req:Request, res:Response){
    const {category,title} = req.query
    
    const categorytxt:string|undefined = category ? category.toString() : undefined
    const titletxt:string|undefined = title ? title.toString() : undefined

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