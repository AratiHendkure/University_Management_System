const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("API is running")
    res.send("API is running")
})

app.listen(4000)