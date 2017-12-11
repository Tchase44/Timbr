
const mongoose = require('./db/connection.js')
const parser = require("body-parser")
const cons = require('consolidate')
const express = require('express')
const app = express()

let Shop = mongoose.model("Shop")

app.set("port", process.env.PORT || 8000)
app.use(parser.json({extended:true}))
app.use(parser.urlencoded({ extended: true }))

//
app.engine('dust', cons.dust);
// set .html as the default extension
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.get('/', (req,res)=>{
	res.render('index')
})
// option: /shops/:state/:zip/:id
app.get("/shops", (req,res)=>{
	Shop.find({})
	.then((Shops)=>{
		// res.render('index',{shop: Shops})
		res.json(Shops)
	})
})
app.get("/shops/:companyID", (req,res)=>{
	Shop.findOne({companyID: req.params.companyID})
	.then((Shop)=>{
	// 	res.render( 'shops',{shop: Shop})
		res.json(Shop)
	})
})
app.get("/bystate/:state", (req,res)=>{
	Shop.find({state: req.params.state})
	.then((Shops)=>{
		// res.render( 'shops',{shop: Shop})
		res.json(Shops)
	})
})
// app.get("/byzip/:zipcode", (req,res)=>{
// 	Shop.find({zipcode: req.params.zipcode})
// 	.then((Shops)=>{
// 		// res.render( 'shops',{shop: Shop})
// 		res.json(Shops)
// 	})
// })
// app.post("/shops", (req,res)=>{
// 	Shop.create(req.body).then((newShop)=>{
// 		res.json(newShop)
// 	})
// })
// app.delete("/shops/:id", (req,res)=>{
// 	Shop.findOneAndRemove({value: req.params.value}).then((data)=>{
// 		res.json({success: true})
// 	})
// })
// app.put("/shops/:id", (req,res)=>{
// 	Shop.findOneAndUpdate({value: req.params.value}, req.body, {new:true}).then((data)=>{
// 		res.json(data)
// 	})
// })

app.listen(app.get("port"), ()=>{
	console.log("Up and runnning on port 8000")
})