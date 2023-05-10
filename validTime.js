function validTime(time){
    let timeArray = time.split(':');

    if (Number(timeArray[0])>23){
        return false;
    }else if (Number(timeArray[1]>59)){
        return false;
    }
    return true;    
}

console.log(validTime("24:00"));
console.log(validTime("23:00"));

function isValidTime(time) {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return timeRegex.test(time);
  }

  console.log(isValidTime("10:30:00")); // true
  console.log(isValidTime("25:30:00")); // false (hours out of range)
  console.log(isValidTime("10:60:00")); // false (minutes out of range)
  console.log(isValidTime("10:30:60")); // false (seconds out of range)
  console.log(isValidTime("10:30")); // false (missing seconds)
  console.log(isValidTime("10:30:00.000")); // false (decimal seconds)
  