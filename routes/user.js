const express = require('express');
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');
const userController = require('../controllers/users');

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));


router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), userController.login);;


router.get("/logout", userController.logout);

//Initial request to google (trigger the login screen)
router.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

//Callback route (Handle the callback from google)
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), userController.renderGoogleCallback);             


module.exports = router;