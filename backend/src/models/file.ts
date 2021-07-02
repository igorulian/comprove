import { Document, Schema, model } from 'mongoose'

export interface IFile extends Document {
    originalname: string;
    filepath: string;
    ownerid: string;
    createdAt: Date;
}

export const fileSchema:Schema = new Schema({
    originalname:{
        type: String,
        required: true,
        unique: false,
    },
    filepath:{
        type: String,
        require: true,
    },
    ownerid:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const FileModel = model<IFile>('File', fileSchema)