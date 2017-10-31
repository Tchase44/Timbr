const mongoose = require("mongoose");

let DealerSchema = mongoose.Schema({
                companyID: Number,
                name: String,
                phone1: String,
                email: String,
                addressLine1: String,
                addressLine2:String,
                city: String,
                state: String,
                country: String,
                zipcode: Number,
                weekHours: Object
});

mongoose.model("Shop",DealerSchema);
mongoose.connect("mongodb://localhost/timbr");

module.exports = mongoose;