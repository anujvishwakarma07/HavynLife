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

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
require('dotenv').config({ path: '../.env' });
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const initDB = async () => {
    await Listing.deleteMany({});
    const ownerId = "69ac603ec1a476a1142ccded";

    console.log("Geocoding listing locations and assigning categories... this may take a few seconds.");

    const categories = ["Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes"];

    for (let i = 0; i < initData.data.length; i++) {
        let obj = initData.data[i];

        let response = await geocodingClient.forwardGeocode({
            query: `${obj.location}, ${obj.country}`,
            limit: 1
        }).send();

        obj.owner = ownerId;
        obj.category = categories[Math.floor(Math.random() * categories.length)];

        obj.image = typeof obj.image === "string" ? {
            url: obj.image,
            filename: "listingimage"
        } : obj.image;

        if (response.body.features && response.body.features.length) {
            obj.geometry = response.body.features[0].geometry;
        } else {
            obj.geometry = {
                type: "Point",
                coordinates: [77.209, 28.6139] // New Delhi fallback
            };
        }
    }

    await Listing.insertMany(initData.data);
    console.log("Data was initialized with 29 premium listings.");
    console.log(`All listings successfully assigned to Owner ID: ${ownerId} and geocoded.`);
};

initDB();