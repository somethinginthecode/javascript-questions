function uniqueValues(arr1,arr2){
    let uniqueArray = [];

    for(let val of arr1){
        if(arr2.includes(val) === false && uniqueArray.includes(val) === false){
            uniqueArray.push(val);
        }
    }

    return uniqueArray;

}

console.log(uniqueValues([1,2,3,5],[1,2,3,4,5]));
console.log(uniqueValues([1,"calf",3,"piglet",3],[7,"filly"]));
