//import express package
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const WorkoutRoutes = require('./Routes/workout')

dotenv.config()

//Experss App
const app = express()

//MiddleWare
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//Routes (http://localhost:4000)
app.get('/', (req, res) => {
    res.json(
        {
            message: "Welcome to our Application"
        }
    )
})

app.use('/api/workouts/', WorkoutRoutes)

//Database Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
   console.log("MongoDB Connected...")
}).catch((error) => {
    console.log(error)
})


//PORT Number
const PORT = process.env.PORT

//listen for requests
 app.listen(PORT, () => {
    console.log(`Server is up and listening at http://localhost:${PORT}`)
})