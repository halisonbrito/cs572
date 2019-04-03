var dns = require("dns");

const {promisify} = require("util");


async function asyncLookup(){

     const funcProm =  promisify(dns.lookup);
     const returnAway = await funcProm("www.mum.edu")
     
     console.log(returnAway.address);
}

asyncLookup();

