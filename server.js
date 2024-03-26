const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDb')
const app = express()

connectDB()
//middleware
app.use(cors())
app.use(express.json())
app.use("/api/position",require('./routes/Position.route'))

const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))