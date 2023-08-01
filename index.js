const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("./config/mongoose")

// use express urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
