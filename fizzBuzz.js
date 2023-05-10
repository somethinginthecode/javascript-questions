function fizzBuzz(number){

    if(number % 5 === 0 && number % 3 ===0){
       return('fizzbuzz');
    }
    else if(number % 5 === 0)
    {
       return('buzz');
    }
    else if(number % 3 === 0)
    {
       return('fizz');
    }
return '';

}

console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(30))
console.log(fizzBuzz(7))
console.log(fizzBuzz(2))