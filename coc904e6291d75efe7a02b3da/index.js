const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rangeEl = document.getElementById("range-el")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

// Randomize all characters from characters array

document.getElementById("generator-el").addEventListener("click", passwordLength)
    
function randomCharacters() {
    let randomChar1 = Math.floor(Math.random() * characters.length)
    let randomChar2 = Math.floor(Math.random() * characters.length)
    return characters[randomChar1]
    return characters[randomChar2]
}   

// Choose a password length

function passwordLength() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < rangeEl.value; i++) {
        if (rangeEl.value >= 8 && rangeEl.value <= 15) {
            passwordOne += randomCharacters()  
            passwordTwo += randomCharacters()
        }     
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

// Copypast the password

function copyText1() {
    let copyText = document.getElementById("password-one-el").textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}

function copyText2() {
    let copyText = document.getElementById("password-two-el").textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}