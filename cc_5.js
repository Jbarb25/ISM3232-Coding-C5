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