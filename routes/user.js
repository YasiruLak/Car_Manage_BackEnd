const express = require("express");
const app = express();
const router = express.Router();

const User = require("../model/User.model");

app.use(express.json());

router.get("/", async (req, res) => {
  //   res.send("awaaaaaaaaaaaa");
  //   console.log("aqaaaaaaaaaaaaaaaaaaaa");
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send("Err: " + err);
  }
});

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  const user = new User({
    Username: req.body.Username,
    Address: req.body.Address,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const response = await user.save();
    res.json(response);
  } catch (err) {
    res.send("Err: " + err);
  }
});

router.delete("/:id", async (req, res) => {});

router.put("/:id", async (req, res) => {});

module.exports = router;
