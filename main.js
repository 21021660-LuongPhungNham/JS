const listImages = document.querySelector('.list-images');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

prev.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    updateSlideShow();
});

next.addEventListener('click', () => {
    index = Math.min(index + 1, listImages.children.length - 1);
    updateSlideShow();
});

function updateSlideShow() {
    const slideWidth = listImages.clientWidth;
    const offset = -index * slideWidth;
    listImages.style.transform = `translateX(${offset}px)`;
}
