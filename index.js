var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { [item]: randomPrice() } )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var list = "In your cart, you have "
  for( let i in cart ) {
    let k = Object.keys(cart[i])[0]
    if( i === car.length-1 ) {
      list += k + " at " + (cart[i])[k]
    }
    else {
      list += k + " at " + (cart[i])[k] + ", "
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function randomPrice() {
  return ~~( ( Math.random()*100 ) + 1 )
}
