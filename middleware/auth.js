const asyncHandler = require("./async");

let session ;
//Prevents routes to be accessed without login, checks sessions
exports.protect = asyncHandler(async (req, res, next) => {

    session = req.session;
    if(session.userid){

        console.log("You're in!!");
        //Summons the following function if executed multiple on routes
        next();
    }else{

        console.log("You're NOT in");
        res.redirect('/user/login');

    }

           
});
