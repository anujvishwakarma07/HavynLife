const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://travelogyindia.b-cdn.net/storage/app/upload/taj-mahal-hotel.jpg",
        set: (v)=> v===""?"https://travelogyindia.b-cdn.net/storage/app/upload/taj-mahal-hotel.jpg" : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String
    }
})

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;

