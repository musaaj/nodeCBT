const express = require("express");
const session = require('express-session');
const parser = require("body-parser");

const app = express();
app.use(session({
	secret: 'ef58tfjyg',
	resave: false,
	saveUninitialized: false
}));
app.use(parser.urlencoded({extended: true}))
const authenticator = (req, res, next)=>{
	if(!req.session.username){
		res.jsonp({error: "user not logged in"})
	} else next();
}

app.use(express.static("public"))

app.post('/login', (req, res)=>{
	if(req.session.username) {
		res.json("logged!")
	}
	const username = req.body.username
	const password = req.body.password
	console.log(req.body);
	if (username && password){
		req.session.username = username;
		res.json({username: username});
	} else {
		res.json({username: false});
	}
});

console.log('server started!');
app.listen(8080);
