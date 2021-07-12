const express = require("express");
const techCrunchRouter = require("./routes/techCrunch");
const appleRouter = require("./routes/apple");
const wallStreetRouter = require("./routes/wallStreet");
const businessRouter = require("./routes/business");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended:true }));

app.use("/apple", appleRouter);
app.use("/wallStreet", wallStreetRouter);
app.use("/business", businessRouter);
app.use("/techCrunch", techCrunchRouter);

app.get('/', (req, res) => {
    res.send("Working");
})


app.listen(process.env.PORT || '4000', () => {
    console.log("Server is running");
})