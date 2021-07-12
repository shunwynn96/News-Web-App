const express = require("express");
const techCrunchRouter = require("./routes/techCrunch");
const appleRouter = require("./routes/apple");
const wallStreetRouter = require("./routes/wallStreet");
const businessRouter = require("./routes/business");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended:true }));

app.use("/apple", appleRouter);
app.use("/wallStreet", wallStreetRouter);
app.use("/business", businessRouter);
app.use("/techCrunch", techCrunchRouter);


app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})