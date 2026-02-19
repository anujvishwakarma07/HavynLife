const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { wrap } = require("module");
const { error } = require("console");
const { listingSchema } = require("./schema");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.set(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/havynLife";

main().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect(MONGO_URL)
}


// root route
app.get("/", (req, res) => {
    res.send('<a href="/listings"><button>Go to Listing</button></a>');
});


//listing validation function
const validateListing = (req, res, next)=>{
    const {error} = listingSchema.validate(req.body);
    const errMsg = error.details.map((el)=> el.message).join(",");
    if(error){
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

//Index Route
app.get("/listings", validateListing, wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
})

//Show Route 
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    if (!details) {
        return next(new ExpressError(404, "Listing not found"));
    }
    // console.log(details);
    res.render("listings/show", { details });
}));

//create route
app.post("/listings", validateListing,  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if (result.error) {
        throw new ExpressError(400, result.error);
    }
    // const {title, description, image, price, country, location} = req.body;
    const newListing = new Listing(req.body.listing);

    await newListing.save();
    res.redirect("/listings");
}));

//Edit route
app.get("/listings/:id/edit", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/edit", { listing });
}));

//update route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        next(new ExpressError(400, "Send valid data for listing"));
    }
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedItem = await Listing.findByIdAndDelete(id);
    console.log(deletedItem);
    res.redirect("/listings");
}));

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"))
});


app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.render("error", { status, message });
});

app.listen(port, () => {
    console.log(`The app is listening on the port : ${port}`);
});