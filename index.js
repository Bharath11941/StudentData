import express from "express"
import userRoute from './routes/userRoute.js'
import dbConnect from "./config/mongod.js"
const app = express()

const PORT = 8000

dbConnect()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',userRoute)


app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`)
})