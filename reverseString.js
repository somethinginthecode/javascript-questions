function reverseString(word){
    let reversedword = word.split('').reverse().join('');
    //reversedword = reversedword.reverse();
    //reversedword = reversedword.join('')
    return reversedword;
}

console.log(reverseString("codegod"))

function reverseString2(word){
    let reversedword = '';

    for(let i = word.length - 1; i >= 0 ; i-- ){
        reversedword += word[i];
    }

    return reversedword;
}

console.log(reverseString2("codegod"))