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
        type: String,
        default: "https://travelogyindia.b-cdn.net/storage/app/upload/taj-mahal-hotel.jpg",
        set: (v) => v === "" ? "https://travelogyindia.b-cdn.net/storage/app/upload/taj-mahal-hotel.jpg" : v,
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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
});


listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        const deleteReview = await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;

