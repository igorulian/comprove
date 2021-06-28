import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import authRoutes from './routes/auth.routes'
import mongoose from 'mongoose'


mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true })

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', authRoutes)
app.use('/api', routes)

app.listen(3002) 
