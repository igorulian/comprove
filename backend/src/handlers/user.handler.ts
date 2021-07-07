import { Request, Response } from "express";
import {Model} from 'mongoose'
import { ICategory, IUser, UserModel } from "../models/user";

const User:Model<IUser> = UserModel

async function handleCreate(req:Request, res:Response){
    const userid:string = req.userid
    const newCategory:ICategory = req.body
    const user = await User.findById(userid)

    const userCategories = user.categories

    let hasCategory = false

    userCategories.forEach(cat => {
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
    return res.status(200).send()
} 

export {handleCreate, handleRemove}