import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { app } from './app';

dotenv.config()

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true })

app.listen(3002)



