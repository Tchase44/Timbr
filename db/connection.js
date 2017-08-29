const mongoose = require("mongoose")

let DealerSchema = mongoose.Schema({})

mongoose.model("Shop",DealerSchema)
mongoose.connect("mongodb:/localhost/timbr")

module.exports = mongoose