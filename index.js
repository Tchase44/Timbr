// const location = {
//     "zipcode": "28205",
//     "location": {
//         "lat": 35.2263714,
//         "lon": -80.7990185
//     }
const mongoose = require('./db/connection.js')
const express = require(express)

const app = express()

// let modelname = mongoose.model("")

app.set("port", process.env.PORT || 8000)


app.listen(app.get("port"), ()=>{
	console.log("Up and runnning on port 8000")
})