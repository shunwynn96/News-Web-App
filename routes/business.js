const express = require("express");
const axios = require("axios").default;
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res, next) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`

    axios.get(url).then((response) => {
        res.send(response.data.articles);
    }).catch((err) =>{
        console.log(err);
    });
});

module.exports = router;