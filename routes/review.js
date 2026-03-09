const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../schema");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");



//Reviews
// Post route
router.post("/", validateReview, isLoggedIn, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = await new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("New Review is saved");
    req.flash("success", "Review added successfully!");
    res.redirect(`/listings/${req.params.id}`);
}));

//Review Delete route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    const deleteReview = await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    console.log(deleteReview);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;