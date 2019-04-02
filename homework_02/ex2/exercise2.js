
Array.prototype.even = function list() {  
    this.filter(element => element%2 == 0 ).forEach(element => console.log("element " + element))

}

Array.prototype.odd = function list() {  
    this.filter(element => element%2 != 0 ).forEach(element => console.log("element " + element))

}
console.log("start");

setTimeout ( function exec() { [1,2,3,4,5,6,7,8].even() },1000);

setTimeout ( function exec() { [1,2,3,4,5,6,7,8].odd() },1000);


console.log("end");
