var dns = require("dns");

const {promisify} = require("util");

const funcProm = promisify(dns.lookup);

funcProm("www.mum.edu").then ( (data) => console.log(data.address) ) 