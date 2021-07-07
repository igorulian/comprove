import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface ICategory {
    name: string;
    color: string;
}

export const categorySchema:Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        default: '#ccc'
    }
})

export interface IUser extends Document {
    email: string;
    avatarUrl: string;
    password: string;
    createdAt: Date;
    categories: ICategory[];
}

export const userSchema:Schema = new Schema({
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        select: false
    },
    avatarUrl:{
        type: String,
        required: false,
        default: ''
    },
    categories:{
        type: [categorySchema],
        default: []
    },
    password:{
        type: String,
        select: false,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

userSchema.pre('save', async function (this:IUser, next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})


export const UserModel = model<IUser>('User', userSchema)