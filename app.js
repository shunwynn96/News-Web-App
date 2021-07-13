const express = require("express");
const businessRouter = require("./routes/business");
const scienceRouter = require("./routes/science");
const sportsRouter = require("./routes/sports");
const technologyRouter = require("./routes/technology");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended:true }));

app.use("/business-api", businessRouter);
app.use("/science-api", scienceRouter);
app.use("/sports-api", sportsRouter);
app.use("/technology-api", technologyRouter);


app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})