function isDuplicated(numArray){
    const sortedNumsArray = numArray.sort((num1,num2)=>{
        return num1 -num2;
    });
    for(let i =0; i<sortedNumsArray.length; i++){
        if(sortedNumsArray[i]=== sortedNumsArray[i+1]){
            return true;
        }
    }

    return false;
}

console.log(isDuplicated([1,2,3,1]));

