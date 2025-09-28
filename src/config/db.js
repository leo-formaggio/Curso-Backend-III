import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Conectado ao MongoDB Atlas");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error)
    process.exit(1);
  }
}