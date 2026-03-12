const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const { required } = require("joi");

const listingSchema = Schema({
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String
    },
    category: {
        type: String,
        enum: ["Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes"],
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});


listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        const deleteReview = await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;

