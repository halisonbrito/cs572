const axios = require('axios');

async function loadFile(callback){

    var dataQuery = await axios.get('https://randomuser.me/api/?results=10');

    callback(dataQuery);
   
}

module.exports = loadFile;