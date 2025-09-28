import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: String,
  pets: Array,
  dni: String
})

export default mongoose.model("User", UserSchema)