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

Company.deleteOne({companyName:"The Kwik-E-Mart"}).exec()
.then((res)=>{
    if(res.deletedCount>0)
        console.log("data deleted");
    else
        console.log("Data not available")
})
.catch((err)=> {
    console.log(err);
})