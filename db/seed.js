const mongoose = require("./connection.js")
const dealerData = require("./seeds.json")

let Shop = mongoose.model("Shop")

Shop.remove({}).then(()=>{
	Shop.collection.insert(dealerData).then(()=>{
		console.log()
		process.exit()
	})
})