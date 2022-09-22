const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
// event listners to "copy to clipboard"
clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText)
    
})
// event listener to "generate password"
generateEl.addEventListener('click', () => {
    // console.log(lengthEl.value);
    // console.log(uppercaseEl.checked);
    // console.log(lowercaseEl.checked);
    // console.log(numbersEl.checked);
    // console.log(symbolsEl.checked);
    resultEl.innerText =  generatePassword(lower = lowercaseEl.checked , upper = uppercaseEl.checked , number = numbersEl.checked , symbol = symbolsEl.checked , length  = lengthEl.value);
})
//generate pass word fnction
function generatePassword(lower, upper, number, symbol, length) {
    let password="";
    while(length > 0){
        if(lower){
          password +=  getRandomLower()
        length -= 1
        if(length == 0){
            break;
        }
        }
        if(upper){
            password += getRandomUpper()
            length -= 1
            if(length == 0){
                break;
            }
        }
        if(number){
            password += getRandomNumber()
            length -= 1
            if(length == 0){
                break;
            }
        }
        if(symbol){
            password += getRandomSymbol()
            length -= 1
            if(length == 0){
                break;
            }
        }
    }
    return password;
}
const lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperLetters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbolLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
//console.log(symbolLetters);
// this function returns a random lower case letter
function getRandomLower() {
     return lowerLetters[Math.floor(Math.random()* 26)]
}
// this function returns a random upper case letter
function getRandomUpper() {
    return upperLetters[Math.floor(Math.random()* 26)]
}
// this function returns a random number
function getRandomNumber() {
    return numbers[Math.floor(Math.random()*10)]
}
// this function returns a random symbol
function getRandomSymbol() {
    return symbolLetters[Math.floor(Math.random()*21)]
}