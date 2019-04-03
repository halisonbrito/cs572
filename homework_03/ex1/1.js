var dns = require("dns");

dns.lookup('www.mum.edu', function (err, addresses, family) {
    console.log( addresses );
});




