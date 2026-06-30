const posterImages = document.querySelectorAll(".posters__image");
let currentIndex = 0;

function showPoster(index) {
  posterImages.forEach((img, i) => {
    img.classList.toggle("posters__image--active", i === index);
  });
}

function cyclePosters() {
  currentIndex = (currentIndex + 1) % posterImages.length;
  showPoster(currentIndex);
}

setInterval(cyclePosters, 4000);
