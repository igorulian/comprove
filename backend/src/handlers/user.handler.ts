import { Request, Response } from "express";
import {Model} from 'mongoose'
import { FileModel, IFile } from "../models/file";
import { ICategory, IUser, UserModel } from "../models/user";

const User:Model<IUser> = UserModel
const File:Model<IFile> = FileModel

async function getData(req:Request, res:Response){
    const userid:string = req.userid
    const user:IUser = await User.findById(userid)

    return res.status(200).send(user)
} 

async function handleCreate(req:Request, res:Response){
    const userid:string = req.userid
    const newCategory:ICategory = req.body
    const user:IUser = await User.findById(userid)

    let hasCategory = false

    user.categories.forEach(cat => {
        if(cat.name === newCategory.name)
            hasCategory = true
    });

    if(hasCategory)
        return res.status(400).send({error: 'Categoria ja existente'})

    const updatedUser:IUser = await User.findByIdAndUpdate(userid,{
        $push: { categories: newCategory }
    },{new: true})

    return res.status(200).send(updatedUser.categories)
}   

async function handleRemove(req:Request, res:Response){
    const userid:string = req.userid
    const categoryName:string = req.params.name
    const user:IUser = await User.findById(userid)

    let hasCategory = false

    user.categories.forEach(cat => {
        if(cat.name === categoryName)
            hasCategory = true
    });

    if(!hasCategory)
        return res.status(400).send({error: 'Categoria não existente'})

    const updatedUser:IUser = await User.findByIdAndUpdate(userid,{
        $pull: {
            categories: { name: categoryName}
        }
    }, {new: true})


    return res.status(200).send(updatedUser.categories)
} 

async function handleList(req:Request, res:Response){
    const userid:string = req.userid
    const user:IUser = await User.findById(userid)

    return res.status(200).send(user.categories)
} 

async function handleEdit(req:Request, res:Response){
    const userid:string = req.userid
    const categoryName:string = req.params.name
    const user:IUser = await User.findById(userid)
    const newCategoryData = req.body

    let hasCategory = false

    user.categories.forEach(cat => {
        if(cat.name === categoryName)
            hasCategory = true
    });

    if(!hasCategory)
        return res.status(400).send({error: 'Categoria não existente'})

    const updatedUser:IUser = await User.findOneAndUpdate({_id: userid, 'categories.name': categoryName},{
        $set: {
            'categories.$': newCategoryData
        }
    }, {new: true})

    //editing all the files connected to this category:

    if(newCategoryData.name){
        await File.updateMany({category: categoryName}, {category: newCategoryData.name})
    }

    return res.status(200).send(updatedUser.categories)
} 

export {handleCreate, handleRemove,handleList,handleEdit,getData}