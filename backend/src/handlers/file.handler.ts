import { Request, Response } from "express";
import {Model} from 'mongoose'
import { FileModel, IFile } from "../models/file";
import { IUser, UserModel } from "../models/user";
import aws from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config()

const File:Model<IFile> = FileModel
const User:Model<IUser> = UserModel
const s3 = new aws.S3()
const bucket = process.env.AWS_BUCKET

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

    const CategorySearchTerm:searchTermType = category ? {ownerid: userid, category: category.toString()} : {ownerid: userid}
    const MonthSearchTerm = month ? {"createdAt": {"$gte": new Date(currentYear, parseInt(month.toString())-1, 1),"$lt": new Date(currentYear, parseInt(month.toString())-1, 31)}} : null


    const SearchTerm = {
        ...CategorySearchTerm,
        ...MonthSearchTerm
    }


    const files:IFile[] = await File.find(SearchTerm).select('+createdAt').sort({createdAt: 1})

    return res.status(200).send(files)
}   

async function handleUpload(req:Request, res:Response){
    const {category,title} = req.query
    const {userid} = req
    
    const categorytxt:string|undefined = category ? category.toString() : undefined
    const titletxt:string|undefined = title ? title.toString() : undefined
    const user = await User.findById(userid)

    let hasCategory = false

    user.categories.forEach(cat => {
        if(cat.name === categorytxt)
            hasCategory = true
    })

    if(category){
        if(!hasCategory)
            return res.status(400).send({error: 'Categoria não existente'})
    }


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

async function handleRemove(req:Request, res:Response){
    const userid:string = req.userid
    const fileid = req.params.id
    const file = await File.findById(fileid)

    const key:string = file.location.toString().replace('https://comprove-bucket.s3.sa-east-1.amazonaws.com/', '')

    if(!file)
        return res.status(400).send({error: 'File not found'})

    if(file.ownerid !== userid)
        return res.status(400).send({error: 'Invalid user'})

    await file.delete()

    s3.deleteObject({Bucket: bucket, Key: key }, (err, data) => { })

    return res.status(200).send()
} 

async function handleEdit(req:Request, res:Response){
    const userid:string = req.userid
    const fileid = req.params.id
    const file = await File.findById(fileid)
    const editedData = req.body

    if(!file)
        return res.status(400).send({error: 'File not found'})

    if(file.ownerid !== userid)
        return res.status(400).send({error: 'Invalid user'})

    const editedFile = await File.findByIdAndUpdate(fileid,{
        ...editedData
    }, {new: true})

    return res.status(200).send(editedFile)
} 


export {handleList, handleUpload,handleRemove, handleEdit}