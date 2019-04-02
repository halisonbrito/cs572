function applyCoupon(item){

 return function(discount){
     let newPrice= item.price - ( (discount/100) * item.price )
     item.price = newPrice;
     return item;
  };


}

console.log( applyCoupon(item)(10).price );