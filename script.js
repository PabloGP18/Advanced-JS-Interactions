Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

let darkSide = document.querySelector(".mode");
darkSide.addEventListener("click",function (){
    document.body.classList.toggle("darkMode");
})