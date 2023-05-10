function intro(firstName,lastName){

    const intro ="Hi, my name is ".concat(firstName," ",lastName,".");
    return intro;
}

console.log(intro('Abhi','Bhadra'))


function intro2(firstName,lastName){
    const intro2 = "Hi, my name is "+ firstName +" "+ lastName +"."
    return intro2;
}
console.log(intro2('Abhi','Bhadra'))


function intro3(firstName,lastName){
    const intro3 = `Hi, my name is ${firstName} ${lastName}.` //Template literals
    return intro3;
}
console.log(intro3('Abhi','Bhadra'))