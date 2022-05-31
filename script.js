Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
// darkmode
let darkSide = document.querySelector(".mode");
darkSide.addEventListener("click",function (){
    document.body.classList.toggle("darkMode");
})
//carousel parallax
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

function nextImage(){
    if(index<images.length-1){
        index++
        carousel.style.backgroundImage = `url(${images[index]})`
    }else{
        index = 0;
        carousel.style.backgroundImage = `url(${images[index]})`
    }

}
function prevImage(){
    if(index<images.length){
        index--
        carousel.style.backgroundImage = `url(${images[index]})`
    }else{
        index = 1;
        carousel.style.backgroundImage = `url(${images[index]})`
    }
}

let next = document.querySelector(".next")
next.addEventListener('click',function (){
    console.log(next);
    nextImage();
})
let prev = document.querySelector(".prev")
prev.addEventListener('click',function (){
    prevImage();
})

setInterval(nextImage,time);
const collage = document.querySelectorAll('.imageCollage');
console.log(collage);

//collage
function enlargeImg(img) {
    img.style.zIndex= "100";
    img.style.transform = "scale(1.3)";
    img.style.transition = "transform 0.25s ease";
}
function resetImg(img) {
    img.style.zIndex="-100"
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}

for (let i = 0; i < collage.length; i++){
    collage[i].addEventListener('click',function (){
        enlargeImg(collage[i]);
    })
}
for (let i = 0; i < collage.length; i++) {
    collage[i].addEventListener('mouseout',function (){
         resetImg(collage[i]);
    })
}

