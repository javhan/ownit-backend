const express = require("express");
const router = express.Router();
const User = require("../models/User")

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        email: req.body.email
    });
    try {
        //here im saving the user and waiting for response (async function)
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
}

})

module.exports = router;