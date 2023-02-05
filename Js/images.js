const images = document.querySelectorAll("img");

const imagePaths = {
  "Damaso1.gif": "images/high/Damaso1.jpg",
  "Felo1.gif": "images/high/Felo1.jpg",
  "Felo2.gif": "images/high/Felo2.jpg",
  "lujan1.gif": "images/high/lujan1.jpg",
  "Nestor1.gif": "images/high/Nestor1.jpg",
  "Nestor2.gif": "images/high/Nestor2.jpg",
  "Nestor3.gif": "images/high/Nestor3.jpg",
  "Nestor4.gif": "images/high/Nestor4.jpg",
  "Padron1.gif": "images/high/Padron1.jpg",
  "Padron2.gif": "images/high/Padron2.jpg"
};

function showImage(event) {
  const src = event.target.src;
  const imageFileName = src.split("/").pop();
  const highResolutionImage = imagePaths[imageFileName];
  let newWindow;
  if (highResolutionImage) {
    newWindow = window.open(highResolutionImage, "_blank", "width=500,height=500");
  }
}

images.forEach(function(image) {
  image.addEventListener("click", showImage);
});
