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




//Update the company
Company.updateOne({companyName:"The Kwik-E-Mart"},{$set:{companyName:"The Slow-E-Mart"}}).exec()
.then((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Updated");
    Company.findOne({companyName:"The Slow-E-Mart"})
    .exec()
    .then((company)=>{
        console.log("UPDATED COMPANY\n"+company);
    })

})
.catch((err)=> {
    console.log(err);
})

