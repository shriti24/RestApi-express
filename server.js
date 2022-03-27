const express = require('express');
const fs = require("fs");
const app = express();
const port = 3001;
let post;

fs.readFile("mockdata.json", "utf-8", (err, data) => {

  post = JSON.parse(data);
  console.log(post);
});

app.listen(port, () => console.log(`server running on port ${port}`));

app.get('/promotions/Price_Offer', (req, res, next) => {
  res.send(post);
  // next();
});

app.get(
  // '/promotions/priceoffers/flights/ond/:origin/:destination?departureDate=departureDate&returnDate=date',
  '/promotions/priceoffers/flights/ond/:origin/:destination',
  (req, res) => {
    const origin = req.params.origin;
    const dest = req.params.destination;
    const depDt = req.query.departureDate;
    const retDate = req.query.returnDate;
    console.log(origin, dest, depDt, retDate);
    let result = [];
    if (retDate !== '') {
      result = post.data.filter(
        (c) =>
          c.departureDate === depDt &&
          c.returnDate === retDate &&
          c.destination === dest &&
          c.origin === origin
      )
    } else {
      result = post.data.filter(
        (c) =>
          c.departureDate === depDt &&
          c.returnDate === retDate &&
          c.destination === dest)
    }
    if (!result) res.status(403).send('The flight with the given dates are not avialable');
    else
      res.send(result);
  }
);