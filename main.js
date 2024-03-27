// Menu

document.querySelector("#open-nav-menu").addEventListener("click", function(){ //abre o menu
    document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){ //fecha
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
});

// Greeting Section

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText = "Good Afternoon!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 15;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside`;

console.log(celsiusToFahr(temperature));

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
    //celsius
    //fahr

    if(e.target.id == "celsius"){
        console.log("Clicked celsius");
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else {
        console.log("Clicked fahr");
        document.querySelector("p#weather").innerHTML = fahrText;

    }

});

// Date & time section

setInterval(function(){
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000)

// Images section
// ./assets/gallery/image1.jpg

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbail Image 3"
    }
];

// for (let i in galleryImages){
//     console.log(galleryImages[i]);
// }

let mainImage = document.querySelector("#gallery > img");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].src;


galleryImages.forEach(function(image, index){

});