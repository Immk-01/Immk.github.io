const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgElement = document.getElementById("randomImage");
imgElement.src = `img/${chosenImage}`;