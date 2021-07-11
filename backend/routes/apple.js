const express = require("express");
const axios = require("axios").default;
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res, next) => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2021-07-09&to=2021-07-09&sortBy=popularity&apiKey=${process.env.API_KEY}`

    axios.get(url).then((response) => {
        res.send(response.data.articles);
    }).catch((err) =>{
        console.log(err);
    });
});

module.exports = router;