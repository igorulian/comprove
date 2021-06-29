import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', authRoutes)
app.use('/api', routes)

export {app}