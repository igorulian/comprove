import { Request, Response } from "express";
import {Model} from 'mongoose'
import { ICategory, IUser, UserModel } from "../models/user";

const User:Model<IUser> = UserModel

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

    await user.update({
        $push: { categories: newCategory }
    })

    return res.status(200).send()
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

    await user.update({
        $pull: {
            categories: { name: categoryName}
        }
    })


    return res.status(200).send()
} 

async function handleList(req:Request, res:Response){
    const userid:string = req.userid
    const user:IUser = await User.findById(userid)

    return res.status(200).send(user.categories)
} 

export {handleCreate, handleRemove,handleList}