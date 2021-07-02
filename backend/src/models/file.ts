import { Document, Schema, model } from 'mongoose'

export interface IFile extends Document {
    originalname: string;
    location: string;
    mimetype: string;
    ownerid: string;
    createdAt: Date;
    category: string;
    title: string;
}

export const fileSchema:Schema = new Schema({
    originalname:{
        type: String,
        required: true,
        unique: false,
    },
    location:{
        type: String,
        require: true,
    },
    mimetype:{
        type: String,
        require: true
    },
    ownerid:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        default: 'geral'
    },
    title:{
        type: String,
        default: 'Comprovante'
    },
    createdAt:{
        type: Date,
        default: Date.now,
        select: false
    }
})

export const FileModel = model<IFile>('File', fileSchema)