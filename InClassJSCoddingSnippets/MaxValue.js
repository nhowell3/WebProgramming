function getMaxValueFromArray(arrOfNum) {
    return Math.max(...arrOfNum)
}

const numbers = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]

console.log(getMaxValueFromArray(numbers))