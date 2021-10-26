const path = require('path');

//Access: Public
//Request: Get
//Route: sitename/user/login
exports.getLogin = (req, res) => {

    res.sendFile('login.html', {
        root: path.join(path.resolve("./"), '/HTML')
    })

};
//CHECK IF ALREADY LOGGED TO REDIRECT TO INDEX IF URL IS FOR LOGIN

//Create session and allows user to navigate
exports.login =  (req, res) => {
    console.log("From SESSIONCHECKER: login");

        console.log(req.body.username, req.body.password)
    if(req.body.username === "Locky" && req.body.password === "123"){

        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)

        console.log("LOGGED IN");

        res.redirect('/');

    }else{
        console.log("Invalid username or password");
        res.redirect('/user/login');
    }
}

exports.logout = (req,res) => {
    console.log("From SESSIONCHECKER: logout");
    console.log("LOGGED OUT!!")
    console.log(req.session)
    req.session.destroy();
    res.redirect('/user/login');
  };

