//Task 1: Object Properties
let customer = {            //declaring an object
    name: "Mickey Mouse",
    age: 42,
    email: "mickeymouse@disney.com"}

console.log(`Customer Name: ${customer.name}`)  //logging each property using template literal
console.log(`Customer Age: ${customer.age}`)
console.log(`Customer Email: ${customer.email}`)


//Task 2: Object Methods
let order = {      //Declaring the object order with the properties
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function(){    //Adding the displayOrder method that logs the order details using "this"
        console.log(`Order ID: ${this.orderID}`),
        console.log(`Total Amount: ${this.totalAmount}`), 
        console.log(`Order Status: ${this.status}`)}}

order.displayOrder()  //Calls the displayOrder method and logs the details from the function


//Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = ["hat", "shoes", "sunglasses"]   //Delcare an array with three products

cartItems.push("shirt")  //Add a new product to the cart using .push
cartItems.pop()  //Remove the last item using .pop that will return the item if requested
cartItems.unshift("jacket")  //Add an item at the beginning using .unshift 
cartItems.shift()  //Remove the first item using .shift and returns it if requested
console.log(cartItems)