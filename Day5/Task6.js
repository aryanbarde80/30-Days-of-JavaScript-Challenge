// Arrow Function

// Using in built function
const isCharacterInString1  = (str, char) => str.includes(char);

console.log(isCharacterInString1("Hello, World!", "W"));
console.log(isCharacterInString1("Hello, World!", "Z"));

// Without using in built function
const isCharacterInString2 = (str,char) => {
    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            return true;
        }
    }
    return false;
}

console.log(isCharacterInString2("Aryan Barde", 'A'));
console.log(isCharacterInString2("Code With Harry", 'H'));