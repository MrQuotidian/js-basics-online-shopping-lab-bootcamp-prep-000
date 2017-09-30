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
  let obj = cart[0]
  let key = Object.keys(obj)[0]
  let val = obj[key]
  var list = "In your cart, you have "

  if( cart.length-1 === 0 ) {
    list += `${key} at ${val}.`
  }
  else {
    list += `${key} at ${val}`

    for( let i=1; i < cart.length; i++ ) {
      let obj = cart[i]
      let key = Object.keys(obj)[0]
      let val = obj[key]

      if(i === cart.length-1) {
        list += ` and ${key} at ${val}.`
      }
      else {
        list += `, ${key} at ${val}`
      }
    }
  }
  
  return list
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