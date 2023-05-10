function digitSum(str){
    const nums = str.match(/\d+/g) || [];
    let sum = 0 ;

    nums.forEach(num => {
        sum += Number(num);
    });

    return sum;

}

console.log(digitSum('2 apples,12 oranges'));
console.log(digitSum('your payment is invalid.'));
