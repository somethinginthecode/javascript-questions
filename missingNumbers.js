function missingNumber(numArr){
    const numberArray = numArr.sort((a,b) =>{
        return a - b;
    });

    for(let i = 0; i< numberArray.length; i++)
    {
        if (i !== numberArray[i]){
            return i;
        }
    }
}

console.log(missingNumber([0,1,2,4,5,6,7,8,9,10]))