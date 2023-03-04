const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()

const app = express()

//connect db
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => console.log("Connect DB")).catch((err) => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use("*", (req, res) => {
    res.json({
        data: "Hello Server"
    })
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`run server in port ${port}`))