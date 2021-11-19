const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {getUserByUserId_get,getAllUsers_get} = require("../controllers/userController");

//get all users
router.get('/all',function(req,res,next){
    User.find({}).then(function(users){
        res.send(users);
    }).catch(next);
});
//get a single user
router.get('/:id',function(req,res,next){
    User.findById(req.params.id).then(function ({ email }){
        res.send({email});
    }).catch(next);
});

router.post("/", function (req, res) {
    User.create(req.body, (error, createdMatch) => {
        if (error) {
            res.status(400).json({ error: error.message });
        }
        res.status(200).json(createdMatch);
    });
});

module.exports = router;