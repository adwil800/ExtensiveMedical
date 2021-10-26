
const sendEmail = require('../utils/sendEmail');
const path = require('path');
//Funciones a usar
 

//Access: Public
//Request: Get
//Route: sitename
exports.getIndex = (req, res) => {
 
        res.sendFile('index.html', {
            root: path.join(path.resolve("./"), '/HTML')
        })
  
};


exports.sMail = () => {

    sendEmail({
        email: "adwil800@gmail.com",
        subject: 'Confirmation Email',
        message: "Este es un mensaje de prueba"
    })

};
