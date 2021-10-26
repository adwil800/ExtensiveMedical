const express = require('express');
//SESSIONS
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;  
//SESSIONS


const app = express();

// Parser for req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Middleware
const index = require("./routes/index");
const citas = require("./routes/citas");
const auth = require("./routes/auth");

//Takes local route and guides HTML
app.use(express.static(__dirname));
//Use of routes middleware

//SESSIONS
app.use(cookieParser());
//session middleware
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));
//SESSIONS

app.use('/', index);
app.use('/citas', citas);
app.use('/user', auth);

//SESSIONS

//SESSIONS

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})