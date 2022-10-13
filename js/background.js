const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const todaysBackground = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
document.body.appendChild(bgImage);

bgImage.src = `./img/${todaysBackground}`;
