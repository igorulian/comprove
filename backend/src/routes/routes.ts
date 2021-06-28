import { Request, Response, Router } from 'express'
import controller from '../controllers/controller'

const routes:Router = Router()

// authRoutes.use(authMiddleware)
routes.get('/test', controller.test)


export default routes

