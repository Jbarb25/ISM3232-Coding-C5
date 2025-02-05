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


//Task 4: Map Method
let prices = [100, 200, 300]  //Declare an array of prices

let disocuntedPrices = prices.map(price => price - (price * 0.10))  //Use the .map method to apply a 10% discount to each price
console.log(disocuntedPrices)  //Log new prices


//Task 5: Filter Method
let inventory = [5, 0, 12, 8, 0]   //Declare an array with at least five product quantities

let filteredInv = inventory.filter(inventory => inventory > 0);  //Use the .filter method to remove products with zero stock
console.log(filteredInv)   //Log the filtered array 


//Task 6: Reduce Method
let sales = [500, 300, 200, 400]   //Declare an array of sales 

let totalRevenue = sales.reduce((sum, sale) => sum + sale, 0);  //Use .reduce method to calculate total revenue of all sales in the array
console.log(totalRevenue)  //Log the total revenue


//Task 7: find() Method
let customers = ["Alice", "Bob", "Charlie", "David"]  //Declare an array of customers

let customer01 = customers.find((customer) => customer == 'Charlie')  //Use .find to locate the cusotmer "charlie"
console.log(customer01)  //Log the customer


//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate}  //Write function that calculates tax amount

console.log(`Tax: ${calculateTax(200, 0.2)}`)  //Returns the calculated tax amount and logs it to the console using template literal


//Task 9: Function Expression
function applyDiscount(price, discount){
    return (price - (price * discount))}   //Write function that calculates discount amount and the price after the disocunt 

console.log(`Discounted Price: ${applyDiscount(200, 0.2)}`)  //Returns the calculated discounted price to the console calling the function 


//Task 10: Arrow Functions 
const calculatePoints = (purchaseAmount) => (purchaseAmount/10)  //Write an arrow function that returns 1 point per $10 spent

console.log(`Points Earned: ${calculatePoints(200)}`)  //Log the points calculated plugging in the purchase amount