# Node.js  

Node.js is an open-source, cross-platform **JavaScript runtime environment** that allows developers to run JavaScript code outside a web browser. It is built on **Google Chrome’s V8 JavaScript engine** and is primarily used for building **scalable, fast, and lightweight** server-side and networking applications.  

## Key Features of Node.js  
- 🚀 **Asynchronous & Non-blocking:** Handles multiple requests simultaneously without waiting for previous tasks to complete.  
- ⚡ **Single-threaded & Event-driven:** Uses a single-threaded model with event looping, making it efficient for handling concurrent connections.  
- 🔥 **Fast Execution:** Powered by the V8 engine, which compiles JavaScript to machine code.  
- 💻 **Cross-platform:** Runs on Windows, macOS, and Linux.  
- 📦 **NPM (Node Package Manager):** Comes with a vast ecosystem of libraries and modules for extending functionality.  

## Use Cases of Node.js  
✔ Web servers and APIs  
✔ Real-time applications (e.g., chat apps, gaming servers)  
✔ Microservices  
✔ Serverless applications  
✔ Streaming applications  

Node.js is widely used for modern web development, especially with frameworks like **Express.js, Nest.js, and Fastify**. 🚀  


## Architecture
- Single threaded event-driven architecture
- Non-blocking I/O operation

## API
- HTTP methods
- Modules (HTTP, File System, URL, path)
- Callback, promises, async/await
- Server

### HTTP Methods
CRUD operation (Create, Read, Update, Delete)

1. GET (Read)
2. POST (Create)
3. PUT (Update)
4. DELETE (Delete)

# Creating HTTP server in Nodejs

This guide will help you create a basic HTTP server using Node.js.

## Steps to Create a Server

### Step 1: Import HTTP Module  
First, import the built-in `http` module in Node.js.

```javascript
import http from "http";
```
### Step 2: Create Server
Next, create a simple server that responds with a success message.

```javascript
const server = http.createServer((request, response) => {
    response.end("Server Running Successfully");
});
```
### Step 3: Run Server on Port
Now, make the server listen on a specific port (e.g., 5000).

```javascript
server.listen(5000, ()=>{
    console.log("Server Running Sucessfully at Port 5000")
})
```
# FileSystem in Nodejs
The File System (fs) module in Node.js allows you to interact with the file system on your computer. It provides methods to read, write, update, delete, and rename files and directories.


## Importing file System Modules
- Importing in commonjs (CJS)
```javascript
const fs = required {'fs'}
``` 
- Importing in Module (ESM)
```javascript
import fs from 'fs'
```
## Method of FileSystem (fs) in Nodejs
#### Synchronous
- fs.readFileSync()
- fs.writeFileSync()
- fs.appendFileSync()
- fs.unlinkSync()
- fs.mkdirSync()
- fs.existsSync()

#### Asynchronous
- fs.readFile()
- fs.writeFile()
- fs.appendFile()
- fs.unlink()
- fs.rename()
- fs.copyFile()
- fs.mkdir()
- fs.readdir()
- fs.stat()
- fs.createReadStream()
- fs.createWriteStream()

Nodejs fileSystem is also divided into two part:
- Asynchronous
- Synchronous

## Synchronous
Synchronous code is executed in a sequential or discipline manner, meaning each operation or task is completed before moving on to the next (work done in queue). This is the default behavior of JavaScript, where code is executed line by line, and each line must finish before the next one starts.

### fs.readFileSync()
- fs.readFileSync() help to read the file content
```javascript
const read = fs.readfileSync("file.txt", "utf8")
console.log(read)
```

### fs.writeFileSync()
- fs.writeFileSync() help to rewrite the content by removig old content in the file
```javascript
const write = fs.writeFileSync("file.txt", "New text");
console.log(write);
```

### fs.appendFileSync()
- fs.appendFileSync() help to update the content without removiing or deleting previous content from the file.
````javascript
const update = fs.appendFileSync("file.txt", "New content text");
console.log(update);
````

### fs.unlinkSync()
- fs.unlinkFileSync() help to delete the given specific file from directory.
````javascript
const unlink = fs.unlinkSync("data.txt");
console.log(unlink);
````

### fs.mkdirSync()
- fs.mkdirSync() primary purpose is to create new directories within your file system.
````javascript
const dir= fs.mkdirSync("new-pathname");
console.log(dir);
````

### fs.existsSync()
- fs.existsSync() main purpose is to check whether the directories or file exist or not. It return true or false. If exist it return true, if not exist return false.
````javascript
const exist = fs.existsSync("my_drectories")
console.log(exit);
````
````javascript
const exist = fs.existsSync("my_file.txt")
consol.log(exist)
````
## Asynchronous
Asynchronous programming in JavaScript is a fundamental concept that allows you to perform tasks without blocking the main execution thread. This is particularly useful for operations that take time to complete, such as network requests, file I/O, or timers. It help to run time consuming task in background. JavaScript provides several mechanisms to handle asynchronous operations:

### fs.readFile()
- fs.readFile() help to read the file content
```javascript
fs.readFile("file.txt", 'utf8', (error, data)=>{
    if(error){
        console.log(error)
        } 
        console.log(data)})
```
### fs.writeFile()
- fs.writeFile() help to rewrite the content by removig old content in the file
```javascript
fs.writeFile("file.txt", "This is new content",  (error, data) =>{
    if(error) {
        console.log(error)
    } console.log(data)
})
```
### fs.appendFile()
- fs.appendFile() help to update the content without removiing or deleting previous content from the file.
````javascript
fs.appendFile("file.txt", "Adding New Content", (error, data)=>{
    if(error) {
        console.log(error)
    }
    console.log(data)
})
````


# Express.js Server

## Introduction
Express.js is a fast and lightweight web framework for Node.js that helps in building web applications and APIs. This guide explains how to create a simple Express.js server.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Basic knowledge of JavaScript

## Installation
First, initialize a Node.js project and install Express.js:

```sh
npm init -y  # Initialize a Node.js project
npm install express  # Install Express.js
```

## Creating a Simple Express Server
Create a new file called `server.js` and add the following code:

```javascript
const express = require('express');  // Import Express
const app = express();  // Create an Express app

const PORT = 3000;  // Define a port

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Running the Server
To start the server, run the following command:

```sh
node server.js
```

Now, open your browser and go to `http://localhost:3000`, and you should see:

```
Hello, Express!
```


## Creating Simple Product API
This is a simple Product API that provides endpoints to manage products. The API follows an MVC (Model-View-Controller) architecture with services handling business logic.


## Folder Structure
```
src/
│-- app.js                # Main entry point of the application
|-- config/
|   ├── database.js         # Connecting with the mongodb server
|-- modules/
|   ├── product.js         # Connecting with the mongodb server
│-- route/
│   ├── productroute.js   # Routes for product-related API endpoints
│-- controller/
│   ├── productcontroller.js   # Handles incoming requests and responses
│-- service/
│   ├── productservices.js   # Business logic for product operations
```


## API Endpoints

### 1. Get All Products
**Endpoint:** `GET /api/products`

**Description:** Fetch all products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 100,
    "description": "Product description"
  }
]
```

### 2. Get Product by ID
**Endpoint:** `GET /api/products/:id`

**Description:** Fetch a single product by ID.

**Response:**
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 100,
  "description": "Product description"
}
```

### 3. Create a Product
**Endpoint:** `POST /api/products`

**Description:** Add a new product.

**Request Body:**
```json
{
  "name": "New Product",
  "price": 150,
  "description": "New product description"
}
```

**Response:**
```json
{
  "message": "Product created successfully"
}
```

### 4. Update a Product
**Endpoint:** `PUT /api/products/:id`

**Description:** Update an existing product by ID.

**Request Body:**
```json
{
  "name": "Updated Product",
  "price": 200,
  "description": "Updated description"
}
```

**Response:**
```json
{
  "message": "Product updated successfully"
}
```

### 5. Delete a Product
**Endpoint:** `DELETE /api/products/:id`

**Description:** Delete a product by ID.

**Response:**
```json
{
  "message": "Product deleted successfully"
}
```

## Installation & Running the Project

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node src/app.js
   ```

4. The API will be available at:
   ```sh
   http://localhost:3000/api/products
   ```

   
## Full Code Implementation

### `src/app.js`
```javascript
import { configDotenv } from 'dotenv';
import express from 'express';
import productRoute from './routes/productRoute.js';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';

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


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
```
### `src/config/database.js`
``` javascript

import mongoose from "mongoose"

const connectDB = async () => {
  try {
    // Using the correct environment variable name
    const status = await mongoose.connect('add your mongodb server')
    console.log(`Database connection successful at ${status.connection.host}`)
    return status
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1) // Exit with failure on connection error
  }
}

export default connectDB;
```

### `src/modules/product.js`
- A Mongoose Schema is a blueprint for defining the structure of documents in a MongoDB collection. It specifies the fields, data types, default values, and validation rules.

``` javascript

import mongoose, { Schema } from "mongoose";

// Define the schema for the Product model
const ProductSchema = new Schema({
    name: String,     // Name of the product
    category: String, // Category to which the product belongs
    brand: String,    // Brand name of the product
    price: Number,    // Price of the product
});

// Create the Product model using the schema
const model = mongoose.model("Product", ProductSchema);

export default model; // Export the model for use in other parts of the application

```

### `src/route/productroute.js`
```javascript
import express from 'express';
import { deleteProductByID, getAllProduct, getProductbyId, postProduct, updateProductbyID } from '../controller/productController.js';
const router = express.Router();

/// C R U D

// Method: Get [Read Products] 
router.get('/', getAllProduct)


// Method: Get [Get Product by ID]
router.get('/:id', getProductbyId)


// Method: Post [Create Products]
router.post('/', postProduct)


// Method: Delete [Delete Products] 
router.delete('/:id', deleteProductByID)


// Method: Put [Update Products] 
router.put('/:id', updateProductbyID)

export default router;
```

### `src/controller/productcontroller.js`
```javascript
import productServices from "../service/productServices.js";

// Method: Get Product
const getAllProduct = async (req, res) => {
  const product = await productServices.getAllProduct();
  res.json(product);
};

// Method Get Product By ID
const getProductbyId = async (req, res) => {
  const id = req.params.id;

  const product = await productServices.getProductbyID(id); // finding single product by id

  //if product not found
  if (!product) res.status(404).send("Sorry, Product Not Found");
  res.json(product);
};

// Method Post (Create) Product
// Function to handle add product 
const postProduct = async (req, res) => {
  // Calls the addProduct function from productServices with request body data
  const data = await productServices.addProduct(req.body);

  // Sends the response with the added product data
  res.send(data);
};

// Method Delete Product by ID
const deleteProductByID = (req, res) => {
  // dynamic id function api/products/:id
  const { id } = req.params;
  const data = productServices.deleteProductbyId(id);
  console.log("Product Deleted Successfully");
};

//Method Put (Update) update product by ID
const updateProductbyID = (req, res) => {
  const { id } = req.params;
  res.send(`Update Product ${id}`);
};

export {
  getAllProduct,
  getProductbyId,
  postProduct,
  deleteProductByID,
  updateProductbyID,
};

```


### `src/service/productservices.js`
```javascript
// Database related work
import fs from "fs";
import Product from "../modules/product.js"; /// importing Product Schema modules from mongoose

// Get all product data
const getAllProduct = async () => {
  return await Product.find();
};

//Get Single Product Data
const getProductbyID = async (id) => {
  return await Product.findById(id); /// Getting product by id
};

/// Add product (Post Method)
const addProduct = async (data) => {
  const productData = await Product.create(data);
  return productData;
};

// Deleting Product (Delete Method)
const deleteProductbyId = async (id) => {
  return await Product.findByIdAndDelete(id); // deleting user by user id
};

export default { getAllProduct, getProductbyID, addProduct, deleteProductbyId };

```


## Dependencies
- Express.js
- Body-parser
- Nodemon (for development)
- dotenv (for importing secure key from .env)
- mongoose