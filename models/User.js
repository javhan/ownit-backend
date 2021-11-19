const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
            lowercase: true,
            validate: [isEmail, "Please enter a valid email"],
        },
    },
         { timestamps: true }
)
    // HASH FOR FUTURE USE. ==? i think its okay not to hash it for now since we'll need to see the database but i wrote the code for teh hashing alr
    
    // userSchema.pre("save", async function (next) {
    // const salt = await bcrypt.genSalt();
    // this.email = await bcrypt.hash(this.email, salt);
    // next();
    // });

    const User = mongoose.model("User", userSchema);
module.exports = User;