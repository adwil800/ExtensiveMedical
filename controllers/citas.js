
const path = require('path');
//Funciones a usar
 

//Access: Public
//Request: Get
//Route: sitename
exports.getCitas = (req, res) => {
 
        res.sendFile('citas.html', {
            root: path.join(path.resolve("./"), '/HTML')
        })
  
};

