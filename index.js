// const location = {
//     "zipcode": "28205",
//     "location": {
//         "lat": 35.2263714,
//         "lon": -80.7990185
//     }
const mongoose = require('./db/connection.js')
const express = require(express)

const app = express()

let Shop = mongoose.model("Shop")

app.set("port", process.env.PORT || 8000)


app.get("/shops", (req,res)=>{
	Shop.find({}).then((Shops)=>{
		res.json(Shops)
	})
})
//app.get("/shops/:id", (req,res)=>{
	// Shop.findOne({}).then((shop)=>{
		// res.json(shop)
	// })
// })
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

app.listen(app.get("port"), ()=>{
	console.log("Up and runnning on port 8000")
})