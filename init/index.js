//Initializing the data into the HavynLife Database
const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main().then(() => {
    console.log("Connected");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/havynLife");
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Initialized");
};

initDB();