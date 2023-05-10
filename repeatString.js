function repeatString(str,n){
    let repeatedString = '';
    while(n>0){
        //repeatedString = repeatedString.concat(str);
        repeatedString +=str.concat(' ');
        n--; 
    }

return repeatedString;
}

console.log(repeatString('google',5))

function repeatString1(str,n){
    return str.repeat(n);
}

console.log(repeatString1('google',5))