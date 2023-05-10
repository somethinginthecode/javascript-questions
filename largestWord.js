function longestWord(str){
    let longestLength = 0;
    let strArray = str.split(' '); //remember to put a space b/w ''
 
    strArray.forEach((word) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    return longestLength;
}

console.log(longestWord('I would like to work Google someday.'))
