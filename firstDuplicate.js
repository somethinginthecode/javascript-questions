function firstDuplicate(numArray){
    let duplicateObject = {};

    for (let num of numArray){
        if (duplicateObject.hasOwnProperty(num)){
            return num;
        }
        duplicateObject[num] = null ;      
    }

    return -1;
}

console.log(firstDuplicate([2,3,3,4,5,6,7,8]))