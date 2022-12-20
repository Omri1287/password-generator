const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let keyBox1 = document.getElementById("key-box1")
let keyBox2 = document.getElementById("key-box2")
let passButton = document.getElementById("passButton")

function randomChar(){
    let randomNum = Math.floor(Math.random()*characters.length)
    return characters[randomNum]
}
passButton.addEventListener("click", function(){
    keyBox1.textContent = "               "
    keyBox2.textContent = "               "
    let i=0
    while (i<=15){
        i++;
        keyBox1.textContent += randomChar()
        keyBox2.textContent += randomChar()
    }
})