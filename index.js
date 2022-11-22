const express = require("express"); //WEB SERVER FRAMEWORK
const fs = require('fs'); //FILE SYSTEM FOR "DATABASE"

const app = express(); //CREATE INSTANCE OF WEB SERVER
//ADD THE JSON PLUGIN FOR THE SERVER
app.use(express.json({extended: true, limit: '1mb'}));

//MAP A ROUTE (Endpoint to Function, e.g. GET / => lambda)
app.get('/', (req, res) => res.sendfile("index.html") );

//MAP A ROUTE. (GET /products => lambda)
app.get('/products',(req, res) => {
  //READ JSON TEXT FILE, CONVERT TO DATA, THEN CONVERT TO JSON RESPONSE.
  res.json(JSON.parse(fs.readFileSync('products.json')))
});

//BEGIN LISTENING FOR WEB REQUESTS ON PORT 3000
app.listen(3000, () => console.log("Started on PORT 3000"));