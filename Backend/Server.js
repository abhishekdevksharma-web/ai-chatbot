const express = require("express")
const userRoute = require("./Routes/User")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

app.use(userRoute)


app.listen(3000, () => { console.log("http://localhost:3000/") })