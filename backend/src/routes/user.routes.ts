import {Router} from 'express'
import controller from '../controllers/user.controller'
import {authMiddleware} from '../middlewares/auth.middleware'

const userRoutes:Router = Router()

userRoutes.use(authMiddleware)
userRoutes.post('/category/add', controller.createCategory)
userRoutes.post('/category/remove/:name', controller.removeCategory)
userRoutes.get('/category/list', controller.listCategory)
userRoutes.post('/category/edit/:name', controller.editCategory)


export default userRoutes

