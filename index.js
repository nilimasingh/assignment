const express = require('express');
const dotenv = require('dotenv');

const route = require('./routes/routes');
dotenv.config({
	path: './config.env',
  });

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/', route);

app.listen(8000, function() {
	console.log('Express app running on port 8000')
});