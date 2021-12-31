/*The Program Written by Xin Dong, Nov. 14, 2019*/

// Problem 1
let s = 'azcbobobegghakl';
let keyword = 'bob';

// method 1
function countVowels(s) {
    let count = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i].match(/[aeiou]/g) != null){
            count ++;
        }       
    }
    return count;
}  

// method 2
function matchVow(s){
    return s.match(/[aeiou]/g).length;
}  

// display result
console.log('Number of vowels: ' + countVowels(s));
console.log('Number of vowels: ' + matchVow(s));


// Problem 2
function keywordOcc(s, keyword){
    let count = 0;
    for(var i = 0; i < s.length; i++){
        if(s.slice(i, keyword.length+i) === keyword){
            count++;
        }
    }
    return count;
}
console.log('Number of times ' + keyword + ' occurrs is: ' + keywordOcc(s, keyword));
