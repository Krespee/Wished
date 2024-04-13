import mongoose from 'mongoose';
import 'dotenv/config'


export const conectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is COnected")
    } catch (error) {
        console.error(`Error al conectar db error: ${error}`)
    }
}