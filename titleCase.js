function titleCase(str){
    let sentence = str.split(' ');

    sentence = sentence.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();

        word = firstLetter.concat(word.slice(1, word.length));

        return word;
    });

    sentence = sentence.join(' ');
    return sentence;

}

console.log(titleCase('Of all the gin joints in the world, she walks into mine.'))