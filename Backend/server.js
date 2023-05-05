const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const {currentDB, localDB, port} = require("./Configuration/config")


const app = express()


// Connect to mongoDB
mongoose.connect(currentDB)
const db = mongoose.connection
db.on('error',        (error) => console.log(`ERROR: ${error.message}`))
db.on('connected',    () => console.log(`MongoDB Connected: ${currentDB}`))
db.on('disconnected', () => console.log('MongoDB Disconnected'))

// MIDDLEWARE
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

app.listen(port,() => console.log(`Server started on port ${port}`))