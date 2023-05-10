function palindrome(str){
    let forwardStr = str.toLowerCase().replace(/[\W_]/g,''); //replaces all spaces and special characters
    let reversedStr;
    reversedStr = forwardStr.split('').reverse().join('');
    return forwardStr === reversedStr;
}

console.log(palindrome("Tenet")); 
console.log(palindrome(".0_0 (: /-\ :) 0-0"));
console.log(palindrome(""))