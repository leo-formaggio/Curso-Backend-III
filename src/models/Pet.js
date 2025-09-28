import mongoose from "mongoose"

const PetSchema = new mongoose.Schema({
  name: String,
  species: String
})

export default mongoose.model("Pet", PetSchema)