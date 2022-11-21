const express = require("express");
const fs = require('fs');

const app = express();
app.use(express.json({extended: true, limit: '1mb'}));

app.get('/',(req, res) => res.sendfile("index.html") );

app.get('/products',(req, res) => {
  res.json(JSON.parse(fs.readFileSync('products.json')))
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
});