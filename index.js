let images = [
  "img/bulbozavr.png",
  "img/pikachy.jpg",
  "img/ivi.png",
  "img/chikorita.png",
  "img/charizard.jpg",
  "img/wartortle.png",
  "img/butterfree.webp",
  "img/jigglypuff.jpg",

  "img/bulbozavr.png",
  "img/pikachy.jpg",
  "img/ivi.png",
  "img/chikorita.png",
  "img/charizard.jpg",
  "img/wartortle.png",
  "img/butterfree.webp",
  "img/jigglypuff.jpg",
];

images.sort(() => Math.random() - 0.5);
console.log(images);
window.onload = function () {
  const imagesWrapper = document.getElementById("imagesWrapper");
  const htmlStr = images
    .map((image, index) => {
      return `
      <div class="flip-container" data-index="${index}">
          <div class="flipper">
              <div class="front"></div>
              <div class="back">
                  <img src="${image}" />
              </div>
          </div>
      </div>
    `;
    })
    .join("");

  imagesWrapper.innerHTML = htmlStr;

  let firstImage = null;

  const clickHendler = (event) => {
    if (event.target.classList.contains("front")) {
      const parent = event.target.parentElement.parentElement;
      parent.classList.add("hover");
      console.log('currentImage');
      console.dir(parent.dataset.index);
      if (firstImage === null) {
        firstImage = parent;
      } else {
        if (images[firstImage.dataset.index] === images[parent.dataset.index]) {
          setTimeout(() => {
            parent.classList.add("hidden");
            firstImage.classList.add("hidden");
            firstImage = null;
          }, 1000)
        } else {
          setTimeout(() => {
            parent.classList.remove("hover");
            firstImage.classList.remove("hover");
            firstImage = null;
          }, 1000);
        }
      }
      console.log('firstImage');
      console.dir(firstImage.dataset.index);
    }
  };
  imagesWrapper.addEventListener("click", clickHendler);
};
