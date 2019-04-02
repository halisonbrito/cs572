String.prototype.filterWords =  function replac(arg1,arg2) {
	return this.replace(arg1, "***").replace(arg2, "***");
}


console.log("this house is nice!".filterWords("house","nice"));
