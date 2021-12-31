/*The Cash Register Program. Written by Xin Dong, Nov. 8, 2019*/
// shopping cart constructor
class shoppingCart{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

// declare object list variable
let objectList = [];

//function to add new items to the list
function addItem(item){
    objectList.push(item);
}

//function to calculate total price of the items in shopping cart
function cashRegister(){
    let totalPrice = 0;
    for(var i = 0; i < objectList.length; i++){
        totalPrice += objectList[i].price; 
    }
    return totalPrice;
}
let a = new shoppingCart('apple', 12);
let b = new shoppingCart('ddd',6);
let c = new shoppingCart('bug', 42);
let d = new shoppingCart('flower',22);
addItem(a);
addItem(b);
addItem(c);
addItem(d);
console.log("Total price in the shopping cart is " + cashRegister() );


/*The Credit Card Validation Program. Written by Xin Dong, Nov. 8, 2019*/
const readline = require('readline');
const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readLineInterface.question(questionText, (input) => resolve(input));
    });
}

//using interactive console 
//function ask  
async function main() {
    var inputNumber = await ask('Please enter your 16 digit numbers, include \'-\' or \'.\' as seperator:');
    var cardNumber = inputNumber.replace(/\D/g, "");

    // function to define if the number is 16 digit
    function is16digit(){
        if(cardNumber.length == 16){
            return true;
        }
        else
            return false;
    }

    //function to define if any digit is not identical
    function isIdentical(){
        var count = 0;
        for( var i = 0; i < cardNumber.length-1; i++){
            if(cardNumber[i] != cardNumber[i+1]){
                count ++;
            }                
        }        
        if(count === 0){
            return false;
        }
        else
            return true;
    }

    //function to define if total value of the 16 digits is greater than 16
    function isGreater(){
        var total = 0;
        for( var i = 0; i < cardNumber.length; i++){
            total += parseInt(cardNumber[i]);
        }
        if( total > 16){
            return true;
        }
        else
            return false;
    }

    //function to define if the last digitis even
    function endEven(){
        if(cardNumber.slice(-1) % 2 != 0){
            return false;
        } 
        return true; 
      }

    //function to validate if the card number is valid
    function ValidateCreditCard(){
        if(is16digit() && isGreater() && endEven() && isIdentical() == true){
            console.log("The card number is valid.");
            return true;        
             }
        else
            console.log("The card number is invalid.");
            return false;
    } 
    
    // call the function to validate card number
    ValidateCreditCard();  
    process.exit();      
}

main();


