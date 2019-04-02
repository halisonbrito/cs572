String.prototype.filterWords =  function replac(arg1,arg2) {   
   let  value = this; 
  let prom = new Promise( function(resolve,reject) {   
			if(arg1){
				resolve(value.replace(arg1, "***").replace(arg2, "***"));
			}else{
				reject("Error");
			}    
	 })

 return prom} ;        
 
 console.log("this house is nice!".filterWords("house","nice").then( (data) => console.log(data)));

