const Listing = require("../models/listing");
const { listingSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    let allListings;

    if (req.query.q) {
        const regex = new RegExp(req.query.q, 'i');
        allListings = await Listing.find({
            $or: [
                { title: regex },
                { location: regex },
                { country: regex }
            ]
        });
    }
    else if (req.query.category) {
        allListings = await Listing.find({ category: req.query.category });
    }
    else {
        allListings = await Listing.find({});
    }

    res.render("listings/index", {
        allListings,
        currentCategory: req.query.category || "Trending",
        searchQuery: req.query.q || ""
    });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new");
};

module.exports.showListing = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews", populate: {
            path: "author"
        }
    }).populate("owner");
    if (!listing) {
        req.flash("notfound", "The listing you requested for does not exist.");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
};

module.exports.createNewListing = async (req, res, next) => {
    const url = req.file.path;
    const filename = req.file.filename;
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    if (response.body.features && response.body.features.length > 0) {
        newListing.geometry = response.body.features[0].geometry;
    } else {
        newListing.geometry = { type: 'Point', coordinates: [0, 0] };
    }

    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        listing.image = { url: req.file.path, filename: req.file.filename };
        await listing.save();
    }
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const deletedItem = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
};