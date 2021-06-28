import { Request, Response, Router } from 'express'
import authController from '../controllers/auth.controller'

const authRoutes:Router = Router()

authRoutes.post('/login', authController.login)
authRoutes.post('/register', authController.register)


export default authRoutes

