var mongoose = require("mongoose");
//connect to the MongoDB in my local or ATLAS
var url = "mongodb://localhost:27017/ITE5315A";
mongoose.connect(url);
var Schema = mongoose.Schema;
var companySchema = new Schema(
    {
        "companyName": String,
        "address": String,
        "phone": String,
        "employeeCount": {
            "type": Number,
            "default": 0
        },
        "country": String
    });

//Creates ORM object and also creates the collection in our DB. If DB not specified in URL, then test db is used
var Company = mongoose.model("ite53415_companies", companySchema);


// create a new company
var kwikEMart = new Company({
    companyName: "The Kwik-E-Mart",
    address: "Springfield",
    phone: "212-842-4923",
    employeeCount: 3,
    country: "U.S.A"
});


// save the company
kwikEMart.save((err) => {
    if (err) {
        console.log("There was an error saving the Kwik-E-Mart company");
    } else {
        console.log("The Kwik-E-Mart company was saved to the  ite5315_companies collection");
        Company.findOne({ companyName: "The Kwik-E-Mart" })
            .exec()
            .then((company) => {
                if (!company) {
                    console.log("No company could be found");
                } else {
                    console.log(company);
                    
                }
            })
            .catch((err) => {
                console.log(`There was an error: ${err}`);
            });
    }
});

