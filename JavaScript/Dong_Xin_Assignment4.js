
function cipher(plainText, shift_distance) { 

    var upperPosition = [];
    var puncPosition = [];
    // Find original uppercase letter positions and store in an array
    // Find original punctuations & special character positions and store in an array
    for(var i = 0; i<plainText.length; i++) {
        if(plainText[i].match(/[A-Z]/) != null){
            upperPosition.push(i);
        }
       if(plainText[i].match(/[^\w_]/g) != null){
            puncPosition.push(i);        
        }
    }

    // Remove punctuations, special characters and whitespaces from the string
    var newPlain = plainText.replace(/([^\w])/g, "");
    
    // Shift characters based on passed argument
    // Change all characters to lowercase
    for(var j =0; j<shift_distance; j++){
        var tempText =  newPlain.slice(1)+newPlain[0]; 
        newPlain = tempText;
        
        
        }
    var lowerTemp = newPlain.toLowerCase();
    // Add punctuations, special characters and whitespace back to their original positions
    for(var n = 0; n < puncPosition.length; n++){
        cipherTemp = lowerTemp.slice(0,[puncPosition[n]]) + plainText[puncPosition[n]] + lowerTemp.slice([puncPosition[n]]);
        lowerTemp = cipherTemp;
    
    }

    // Change characters at original uppercase positions to uppercase
    for(var k = 0; k < upperPosition.length; k++){
        var cipherText = lowerTemp.slice(0,upperPosition[k])+lowerTemp.charAt(upperPosition[k]).toUpperCase()+lowerTemp.slice(upperPosition[k]+1) ;
        lowerTemp = cipherText;
       
    }
   // return text after shift
    return cipherText;
} 
// Test for encrypt
console.log(cipher("Hello, Mee World/T3H%", 8)); 



function decipher(encryptedText, shift_distance) { 

    var upperPosition = [];
    var puncPosition = [];
    // Find uppercase letter positions and store in an array
    // Find punctuations & special character positions and store in an array
    for(var i = 0; i<encryptedText.length; i++) {
        if(encryptedText[i].match(/[A-Z]/) != null){
            upperPosition.push(i);
        }
       if(encryptedText[i].match(/[^\w_]/g) != null){
            puncPosition.push(i);        
        }
    }

    // Remove punctuations, special characters and whitespaces from the string
    var newEncrypt = encryptedText.replace(/([^\w])/g, "");
    
    // Shift characters based on passed argument
    // Change all characters to lowercase
    for(var j = 0; j<shift_distance; j++){        
        var tempText =  newEncrypt.slice(-1) + newEncrypt.slice(0,-1); 
        newEncrypt = tempText;
        
        
       
        }
    var lowerTemp = newEncrypt.toLowerCase();
    // Add punctuations, special characters and whitespace back to their original positions
    for(var n = 0; n < puncPosition.length; n++){
        var encryptTemp = lowerTemp.slice(0,[puncPosition[n]]) + encryptedText[puncPosition[n]] + lowerTemp.slice([puncPosition[n]]);
        lowerTemp = encryptTemp;
    
    }

    // Change characters at original uppercase positions to uppercase
    for(var k = 0; k < upperPosition.length; k++){
        var plainText = lowerTemp.slice(0,upperPosition[k])+lowerTemp.charAt(upperPosition[k]).toUpperCase()+lowerTemp.slice(upperPosition[k]+1) ;
        lowerTemp = plainText;
       
    }
   // return text after shift
    return plainText;
} 
// Test for decrypt
console.log(decipher("World, T3h Hello/MeE%", 8));
console.log(decipher(cipher("hello /World, %", 4),4));
