import { Request, Response, Router } from 'express'
import controller from '../controllers/controller'
import {authMiddleware} from '../middlewares/auth.middleware'
import multer from 'multer'
import multerConfig from '../config/multer'

const routes:Router = Router()

routes.use(authMiddleware)
routes.post('/upload',multer(multerConfig).single('file'), controller.uploadReceipt)
routes.get('/list', controller.listReceipts)
routes.get('/show/:id', controller.showReceipt)


export default routes
