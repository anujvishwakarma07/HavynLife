const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");



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

app.listen(port, () => {
    console.log(`The app is listening on the port : ${port}`);
});

app.get("/", (req, res) => {
    res.send('Hey Guys this is the home page of my major project');
})

// app.get("/testlisting", async (req, res) => {
//     try {
//         let sampleListing = new Listing({
//             title: "My new Villa",
//             description: "This is a great villa which offer you better services",
//             image: "",
//             price: 15264,
//             location: "NewYork City, USA",
//             country: "United State America"
//         })

//         const saveListing = await sampleListing.save();
//         console.log(saveListing);

//         res.send("Successfully testing ");
//     }catch (err) {
//         console.log(err);
//         res.status(500).send("Error saving listing");
//     }
// });


//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
})

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
})

//Show Route 
app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    // console.log(details);
    res.render("listings/show", { details });
})

//create route
app.post("/listings", async (req, res) => {
    // const {title, description, image, price, country, location} = req.body;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//Edit route
app.get("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/edit", { listing });
})

//update route
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
})

//Delete Route
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const deletedItem = await Listing.findByIdAndDelete(id);
    console.log(deletedItem);
    res.redirect("/listings");
})

