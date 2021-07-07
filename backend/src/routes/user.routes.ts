import {Router} from 'express'
import controller from '../controllers/user.controller'
import {authMiddleware} from '../middlewares/auth.middleware'

const userRoutes:Router = Router()

userRoutes.use(authMiddleware)
userRoutes.post('/category/add', controller.createCategory)
userRoutes.delete('/category/remove/:name', controller.removeCategory)


export default userRoutes

