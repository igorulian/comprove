import mongoose, { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username: string;
    email: string;
    avatarUrl: string;
    password: string;
    createdAt: Date;
}

export const userSchema:Schema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
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