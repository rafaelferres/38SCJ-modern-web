import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connection: any = {}

const dbConnect = async () => {
  if (connection.isConnected) return

  const db = await mongoose.connect(process.env.MONGO_URL ? process.env.MONGO_URL : '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
