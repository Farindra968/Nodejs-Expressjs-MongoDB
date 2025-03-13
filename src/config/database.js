
import mongoose from "mongoose"

const connectDB = async () => {
  try {
    // Using the correct environment variable name
    const status = await mongoose.connect(process.env.MONGOOSE_URL)
    console.log(`Database connection successful at ${status.connection.host}`)
    return status
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1) // Exit with failure on connection error
  }
}

export default connectDB;