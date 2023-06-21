// Write function called hasOddNumbe which accepts an array and returns a boolean

hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false

function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
}



hasAZero(33321232131012) // true
hasAZero(1212121) // false

function hasAZero(num) {
    return num.every(char => char !== 0);
}



hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false


function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !==0);
}




hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true


function hasNoDuplicates(arr) {
    return !arr.some((value, index) => arr.indexOf(value) !== index)
}




let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false



function hasCertainKey(objects, key) {
    return objects.every(obj => obj.hasOwnProperty(key));
}




let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false


  function hasCertainValue(arr, key, value) {
    return arr.every(obj => obj[key] === value);
  }



  