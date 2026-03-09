const mongoose = require("mongoose");

main().then(()=>{
    console.log("connetion successful");
}).catch((err)=>{
    console.log(err);
})


async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/havynLife");
}


const reviewSchema  = new mongoose.Schema({
    comment : String,
    rating : {
        type : Number,
        min : 1,
        max: 5
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    author: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
});


module.exports = mongoose.model("Review", reviewSchema);