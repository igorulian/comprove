import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    email: string;
    avatarUrl: string;
    password: string;
    createdAt: Date;
    categories: string[];
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
        type: [String],
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