const path = require("path");
const express = require("express");
const app = express();
const getWeatherInfo = require("./utils/getWeatherInfo");
const cors = require("cors");
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1 style='color: green'>Hello express !</h1>");
});

app.get("/about", (req, res) => {
  res.send({ page: "about page" });
});

app.get("/info", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({ product: [req.query.search] });
});

app.get("/weather", (req, res) => {
  if (!req.query.city) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  getWeatherInfo(req.query.city, (data) => {
    res.send(data);
  });
});
app.get("/help/*", (req, res) => {
  res.send("help artical not found");
});
app.get("*", (req, res) => {
  res.send("404 page not found ");
});

app.listen(8080, () => {
  console.log("http://localhost:8080/");
});




