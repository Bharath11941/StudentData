import mongoose from "mongoose";


const dbConnect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/userStore").then(() => {
    console.log("database connected successfully")
  }).catch(() => {
    console.log("error occured")
  })
}

export default dbConnect