function formatNames(arr) {
    let formatedNames = ""
    for (let i = 0; i < arr.length; i++) {
        formatedNames += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        if (i < arr.length - 1)
            formatedNames += ", ";
    }
    return formatedNames;
}

console.log(formatNames(["bob", "jim", "billy"]))
console.log(formatNames(["allison", "nick", "hayden", "andrew", "dylan"]))
console.log(formatNames(["tim", "charizard"]))