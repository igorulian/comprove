import { NextFunction, request, Request } from 'express'
import { Response } from 'express-serve-static-core'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'


export function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader:string = req.headers.authorization

    if(!authHeader)
        return res.status(401).send({error: 'No token provided'})

    const parts:string[] = authHeader.split(' ')
    
    if(parts.length !== 2)
        return res.status(401).send({error: 'Token error'})

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Tokem malformated'})

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'})

        req.userid = decoded.id

        return next()

    })
}