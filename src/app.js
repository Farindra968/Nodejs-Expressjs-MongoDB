import { configDotenv } from 'dotenv';
import express from 'express';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js'
import authRouter from './routes/authRoutes.js'
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import configCloudinary from './config/cloudinary.js';
import multer from 'multer';

configDotenv();

const app = express();

// importing port from .env file
const port = process.env.PORT;

// connection mongose database
connectDB();

// connection with CLOUDINARY 
configCloudinary();

// adding multer
const upload = multer({
    storage: multer.memoryStorage()
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.json({
        "name": "Backend",
        "version": "v1.0.0",
        "status": port,
        "developer": "Farindra Bhandari"
    })
})

/// 'api/products - Product 
app.use('/api/products', productRoute)

/// 'api/users - User
app.use('/api/users', upload.single("image"), userRoute)

// 'api/auth/login
app.use('/api/auth/', authRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})