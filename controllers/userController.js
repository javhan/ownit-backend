const User = require("../models/User");


module.exports.getAllUsers_get = async (req,res) => {
    const limit = req.params.limit || 500;
    const allUsers = await User.find({}).limit(limit);
    res.json(allUsers);
};