const express = require("express");
const session = require('express-session');
const parser = require("body-parser");
const {User, Group} = require('./models')

const account = express();
account.use(session({
	secret: 'ef58tfjyg',
	resave: false,
	saveUninitialized: false
}));

account.post('/login', async (req, res)=>{
	const username = req.body.username
	const password = req.body.password

	if (username && password){
		req.session.username = username;
        try{ 
        const user = await User.findOne({ where: {
                username: username, 
                password: password
            },
            include: Group
        });
        req.session.username = username;
        res.json(user? user: {})
    } catch(error){
        res.json({});
    }
}
});

module.exports = account;