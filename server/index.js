import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import{UserRouter} from './routes/user.js'



const app = express()



app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)



mongoose.connect('mongodb+srv://mern-kelas:qiKzrSG9H0tXFRbn@mern-kelas.eiukouu.mongodb.net/?retryWrites=true&w=majority&appName=mern-kelas')


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})