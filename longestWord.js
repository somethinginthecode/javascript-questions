function longestWord(str){

    let filteredArray = str.replace(/[\W_]/g,' ').split(' ');
    let largest ='';

    filteredArray.forEach((word) => {
        largest = word.length > largest.length ? word : largest;       
    });

    return largest;
}

console.log(longestWord('The sound of the waves crashing against the shore was soothing and peaceful.'))