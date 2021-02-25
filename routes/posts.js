const { Router } = require("express");
const express = require("express");
const Posts = require("../models/Posts");
const router = express.Router();
// for post request creat

router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saving the data");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
