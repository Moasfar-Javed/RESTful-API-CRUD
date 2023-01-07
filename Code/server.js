//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router");

//configuring env variables
dotenv.config();

const app = express();

//connecting to the database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//using middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

//for all invalid urls
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

//listening at port 5000
app.listen(process.env.PORT, async () => {
  console.log(`listening on port 5000`);
});
