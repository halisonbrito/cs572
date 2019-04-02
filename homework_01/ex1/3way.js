String.prototype.filterWords = async function replac(arg1,arg2) {   
   let  value = this; 
  let prom = await new Promise( function(resolve,reject) {   
			if(arg1){
				resolve(value.replace(arg1, "***").replace(arg2, "***"));
			}else{
				reject("Error");
			}    
	 })
	 
	console.log(prom);
	
 return prom} ;        

 console.log("this house is nice!".filterWords("house","nice"));
 
 console.log("Finish");

