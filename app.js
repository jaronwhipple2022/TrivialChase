const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('');

app.use(bodyParser.json());


app.listen(PORT);