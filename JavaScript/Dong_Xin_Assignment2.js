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

async function convention(){
    var n = await ask('Enter a base 10 number: ');
    var str = '';
    while (n>=1){
        var m = n%2;
        n = parseInt(n/2); 
        var temp = m.toString();
        str = temp.concat(str);            
    }
    console.log('The corresponding binary number is: ' + str);
    process.exit(); 
}

convention();
