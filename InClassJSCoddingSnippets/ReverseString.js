function reverseString(inputStr){
    return inputStr.split("").reverse().join("")
}

let startingString = "Hello World!"
console.log(startingString)
console.log(reverseString(startingString))