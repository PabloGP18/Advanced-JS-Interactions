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

let images = ["Images/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
    "Images/drew-dizzy-graham-cB4Uqoc9D9k-unsplash.jpg",
    "Images/jamie-hagan-RWzPBcWVdpw-unsplash.jpg",
    "Images/renato-pozzi-G4oGYy_ZcsQ-unsplash.jpg",
    "Images/sam-williams-UuGAw6nF0Vw-unsplash.jpg"];
let carousel = document.querySelector(".carouselContainer");
let index = 0;
let time = 5000;

carousel.style.backgroundImage = `url(${images[index]})`
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';

function nextPicture(){
    if(counter<images.length-1){
        counter++
        carousel.style.backgroundImage = `url(${images[index]})`
    }else{
        counter = 0;
        carousel.style.backgroundImage = `url(${images[index]})`

    }
}
setInterval(nextPicture,time);

