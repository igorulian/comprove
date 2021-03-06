import {Router} from 'express'
import controller from '../controllers/file.controller'
import {authMiddleware} from '../middlewares/auth.middleware'
import multer from 'multer'
import multerConfig from '../config/multer'

const routes:Router = Router()

routes.use(authMiddleware)
routes.post('/upload',multer(multerConfig).single('file'), controller.uploadReceipt)
routes.get('/list', controller.listReceipts)
routes.get('/show/:id', controller.showReceipt)
routes.delete('/remove/:id', controller.removeReceipt)
routes.post('/edit/:id', controller.editReceipt)


export default routes

