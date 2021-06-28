import express, { Router } from 'express'

const routes:Router = express.Router()


routes.get('/test', (req,res) => {
    res.status(200).send({message: 'TESTE'})
})


export default routes

