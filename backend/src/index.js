const express = require('express')
const app = express();
const mongoose = require("mongoose")
const env = require('dotenv');
const openaiRoutes = require('./routes/openai')

env.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster1.vqwpmxh.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Database connected")
    }).catch((error) => {
        console.log(error)
    })


app.use(express.json());
app.use('/api',openaiRoutes)

app.listen(4000, ()=>{
    console.log("server running on port 4000")
})

