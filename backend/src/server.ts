import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { app } from './app';

dotenv.config()

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true }).then(() => {
    console.log('DB Conectada com sucesso')
}).catch(() => {
    console.log('Erro ao conenctar db')
})

app.listen(3002)



