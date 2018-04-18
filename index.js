var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item1= new Object({itemName:item,itemPrice:Math.floor(Math.random()*100)+1});
 cart.push(item1);
 return `${cart[cart.length-1].itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
}

function total() {
  // write your code here
  var amountPay=0;
  for(var i=0;i<cart.length;i++){
    amountPay+=Number(`${cart[i].itemPrice}`);
  }
  
  
}

function removeFromCart(item) {
  // write your code here
  cart.forEach(function(element){
    if(element===item){
      cart.splice(indexOf(element),1);
      } else{
        return "That item is not in your cart";
      }
  });
  
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {return  "Sorry, we don't have a credit card on file for you";} else{
    cart=[];
    return `Your total cost is ${total()}, which will be charged to ${cardNumber}.`;
  }
  
}
