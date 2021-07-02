import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import aws from 'aws-sdk'
import multers3 from 'multer-s3'
import dotenv from 'dotenv'
dotenv.config()

// console.log(new aws.S3())

const storageType = {
    local: multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null, path.resolve(__dirname, '..' ,'tmp', 'uploads'))
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                // if( err ) cb(err)

                const userid = req.userid
                const filename = `${userid}-${hash.toString('hex')}`

                cb(err,filename)
            })
        }
    }),
    s3: multers3({
        s3: new aws.S3(),
        bucket: process.env.AWS_BUCKET,
        contentType: multers3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if( err ) cb(err)

                const userid = req.userid
                const filename = `${userid}-${hash.toString('hex')}`

                cb(null,filename)
            })
        }
    })
}

export = {
    dest: path.resolve(__dirname, '..' ,'tmp', 'uploads'),
    storage: storageType.local,
    limits: {
        fileSize: 20 * 1024 * 1024,
    },
    fileFilter: (req,file,cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error('Invalid file type'))
        }
    },
}