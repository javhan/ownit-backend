require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require("helmet")
const morgan = require("morgan")
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const path = require("path")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
//connecting to datatbase
const PORT = process.env.PORT;
const dbURI = process.env.MONGO_URI;
console.log(dbURI);
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongodb connection established.");
    app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
  })
  .catch((err) => console.log(err));


  // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.get("/*", (req, res) => {
  res.sendFile(path.join("/app/client/build/", "index.html"));
});




