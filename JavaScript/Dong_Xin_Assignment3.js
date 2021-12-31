

function sumDigits(n){

    var temp = 0;
    while (n > 9){
        var m = n % 10;
        n = parseInt(n/10);
        temp = m + temp;
    }
    if (n <= 9 && n > 0){
        var temp1 = n;
    }
    var sum = temp + temp1;
    console.log('The sum of digits is: ' + sum );
}
sumDigits(234);
sumDigits(222);
sumDigits(1234);
console.log((10 / 6 ) >> 0);
console.log(null || 'test');
console.log('left' || 'right');
console.log(8 * null);
console.log('5' - 1);
console.log('5' + 1);
console.log('five' * 2);

let music = ["Jazz", "Blue"];
music.push("Rock_n-Roll");
console.log( music);
let n = Math.floor(music.length/2);
music[n] = 'Classic';
 
console.log( music);
music.shift();
console.log(music);
music.unshift('Rap','Reggae');
console.log(music);