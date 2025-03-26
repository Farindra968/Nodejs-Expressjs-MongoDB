import { configDotenv } from 'dotenv';
import express from 'express';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js'
import authRouter from './routes/authRoutes.js'
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import configCloudinary from './config/cloudinary.js';

configDotenv();

const app = express();

// connection mongose database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// importing port from .env file
const port = process.env.PORT;

// connection with CLOUDINARY 
configCloudinary();

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
app.use('/api/users', userRoute)

// 'api/auth/login
app.use('/api/auth/', authRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})