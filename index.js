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
  let countOpenedImages = 0;
  let sumOpenedImages = 0;
  const clickHendler = (event) => {
    if (event.target.classList.contains("front") && countOpenedImages < 2) {
      const parent = event.target.parentElement.parentElement;
      parent.classList.add("hover");
      countOpenedImages++;
      if (firstImage === null) {
        firstImage = parent;
      } else {
        if (images[firstImage.dataset.index] === images[parent.dataset.index]) {
          setTimeout(() => {
            parent.classList.add("hidden");
            firstImage.classList.add("hidden");
            firstImage = null;
            countOpenedImages = 0;
            sumOpenedImages += 2;
            if(sumOpenedImages === images.length) {
              alert("You win");
             }
          }, 1000);
        } else {
          setTimeout(() => {
            parent.classList.remove("hover");
            firstImage.classList.remove("hover");
            firstImage = null;
            countOpenedImages = 0;
          }, 1000);
        }
      }
    }

  };
  imagesWrapper.addEventListener("click", clickHendler);
};
