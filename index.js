const express = require("express");
const bodyParser = require("body-parser");

const comments = require('./Routes/comments');
const contacts = require('./Routes/contacts');
const products = require('./Routes/products');
const vehicles = require('./Routes/vehicles');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});