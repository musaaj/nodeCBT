const express = require("express");
const session = require('express-session');
const parser = require("body-parser");
const account = require('./account');


const app = express();
app.use(session({
	secret: 'ef58tfjyg',
	resave: false,
	saveUninitialized: false
}));
app.use(parser.urlencoded({extended: true}))

app.use(express.static("public"))
app.use('/account', account);


console.log('server started!');
app.listen(8080);
