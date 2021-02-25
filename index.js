const express = require("express");
const mongo = require("mongoose");
const postsRouter = require("./routes/posts");
const app = express();
app.use(express.json());
require("dotenv/config");
// middleware
// route
app.get("/", (req, res) => {
  res.send("home");
});

mongo
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection secure");
  })
  .catch((err) => console.log(err));

app.use("/posts", postsRouter);

app.listen(3000);
