if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const listingsRouter = require("./routes/listing");
const reviewsRouter = require("./routes/review");
const userRouter = require("./routes/user");
const session = require("express-session");
const flash = require("connect-flash");
const cookie = require("cookie-parser");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("./models/user");


const sessionOptions = {
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookie("mysecretkey"))
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


if (process.env.GOOGLE_CLIENT_ID) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    // Extract email if available
                    let email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.id}@google.com`;
                    user = await User.create({
                        googleId: profile.id,
                        username: profile.displayName || `user_${profile.id.slice(-4)}`,
                        email: email
                    });
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    ))
} else {
    console.log("Warning: Google Client ID not found. Google Auth will be disabled.");
}

const MONGO_URL = "mongodb://127.0.0.1:27017/havynLife";

main().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect(MONGO_URL)
}

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.fail = req.flash("fail");
    res.locals.notfound = req.flash("notfound");
    res.locals.currUser = req.user;
    next();
})

// root route
app.get("/", (req, res) => {
    res.send('<a href="/listings"><button>Go to Listing</button></a>');
});

// app.get("/demouser", async (req, res) => {
//     const demoUser = new User({
//         email: "anujvishwakarma7077@gmail.com",
//         username: "anujvishwakarma",
//     });

//     let registerUser = await User.register(demoUser, "password");
//     res.send(registerUser);
// })

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


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
