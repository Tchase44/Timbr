// const location = {
//     "zipcode": "28205",
//     "location": {
//         "lat": 35.2263714,
//         "lon": -80.7990185
//     }
const mongoose = require('./db/connection.js')
const express = require("express")
const parser = require("body-parser")

const app = express()

let Shop = mongoose.model("Shop")

app.set("port", process.env.PORT || 8000)
app.use(parser.json({extended:true}))
app.use(parser.urlencoded({extended:true}))


app.get("/shops", (req,res)=>{
	Shop.find({}).then((data)=>{
		res.json(data)
	})
})
// app.post("/shops", (req,res)=>{
// 	Shop.create(req.body).then((newShop)=>{
// 		res.json(newShop)
// 	})
// })
// app.delete("/shops", (req,res)=>{
// 	Shop.findOneAndRemove({value: req.params.value}).then((data)=>{
// 		res.json({success: true})
// 	})
// })
// app.put("/shops", (req,res)=>{
// 	Shop.findOneAndUpdate({value: req.params.value}, req.body, {new:true}).then((data)=>{
// 		res.json(data)
// 	})
// })



app.get("/*", (req, res)=>{
  res.sendFile(__dirname + "./index.html");
});


app.listen(app.get("port"), ()=>{
	console.log("Up and runnning on port 8000")
})