const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("API is running")
    res.send("API is running and i am happy")
})

app.listen(4000)