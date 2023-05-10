function fizzBuzz(number){
    let word = '';

    if(number % 3 === 0){
        word = word.concat('fizz');
    }
    if(number % 5 === 0){
        word = word.concat('buzz');
    }
return word;
}

console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(30))
console.log(fizzBuzz(7))
console.log(fizzBuzz(2))