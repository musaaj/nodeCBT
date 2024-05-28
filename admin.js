const express = require("express");
const session = require('express-session');
const parser = require("body-parser");

const app = express();

const authenticator = (req, res, next)=>{
	if(!req.session.username){
		res.jsonp({error: "user not logged in"})
	} else next();
}

