if(process.env.NODE_ENV!=="production"){
    require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const errors = require('./middleware/errors')
const app = express()
const port = 3000
const router = require('./router/index')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

app.use(errors)

app.listen(port,()=>console.log(`listen on port ${port}...`))