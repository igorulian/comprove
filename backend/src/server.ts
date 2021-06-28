import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import authRoutes from './routes/auth.routes'
import mongoose from 'mongoose'
import requireDir from 'require-dir'


const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', authRoutes)
app.use('/api', routes)

app.listen(3002)

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

console.log('📦 Connecting to Databse ...')
mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true })
.then(() => {
    console.log('📦 Database Connected ✔️')})
.catch(() => {
    console.log('📦 Error in connect to Database ❌') })

// require('./models/user')




