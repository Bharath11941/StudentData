import mongoose from "mongoose";
// Field Name	Type	Sample Value
// Record ID	Number	1234
// Name	String	Joe Smith
// Cell Phone	String	405.867.5309
// Work Phone	String	123.123.1234
// Email	String	joe_s@gmail.com
// Address	String	123 Vic Way, Dallas TX 75001
// Basic Widget Order	Number	37
// Advanced Widget Order	Number	12
// Protection Plan	Boolean	True

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  cellPhone:{
    type:String,
    required:true
  },
  workPhone:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  basicWidgetOrder:{
    type:Number,
    required:true
  },
  advancedWidgetOrder:{
    type:Number,
    required:true
  },
  protectionPlan:{
    type:Boolean,
    required:true
  }

})

export default mongoose.model("user",userSchema)