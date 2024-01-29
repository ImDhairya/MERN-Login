import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Data } from "./db/data.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// 8P0b6O3nGKCOJp2t
try {
  mongoose
    .connect("")
    .then(console.log("DB connected succfully "));
} catch (error) {
  console.log(error, "ERR");
}

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await Data.findOne({ email: email });

    if (check) {
      res.json("exist");
      return;
    } else {
      res.json("notexist");
      await Data.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Data.findOne({ email: email });

    if (check) {
      res.json("exist");
      return
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});


app.listen(4000, () => {
  console.log("db chal ja bhai");
})