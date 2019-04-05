const os = require('os');
const {of} = require('rxjs');
const {filter } = require('rxjs/operators');

const {Observable} = require('rxjs');


function checkSystem(){
    console.log("Checking your system");

    const value = of(os);

    value.pipe (  
             filter ( (data) =>  { 
                if( data.totalmem() <  4000000000)   { 
                    throw new Error("This app needs at least 4 GB of Ram");  
                } else {
                    return true;
                }
            }),
            filter ( (data) =>  { 
                if( data.cpus().length < 2 )   { 
                    throw new Error("Processor is not supported");  
                } else {
                    return true;
                }
            })


            ).subscribe( function (data){
        
                console.log("System is checked successfully");

            }, err => console.log(err.message)
            );


}

checkSystem();