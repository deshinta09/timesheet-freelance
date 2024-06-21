if(process.env.NODE_ENV!=="production"){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port,()=>console.log(`listen on port ${port}...`))