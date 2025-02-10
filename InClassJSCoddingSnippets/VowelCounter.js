function getNumOfVowells(text){
    const vowells = ['a','e','i','o','y']
    textLower = text.toLowerCase()
    let vowellCounter = 0;
    
    for (let i = 0; i < textLower.length; i++){
        if (vowells.includes(textLower[i])){
            vowellCounter++;
        }
    }

    return vowellCounter;
}

const inputText = "Here is some sample text with 11 vowels";
console.log(getNumOfVowells(inputText));