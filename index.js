console.log("funcinoa");
const simpleCarousel = document.querySelector(".js-carrousel--simples");
const simpleCarouselb = document.querySelector(".js-carrousel--simplesb");
const simpleCarouselc = document.querySelector(".js-carrousel--simplesc");
const bigCarousel = document.querySelector(".js-carrousel--big");
new Glider(bigCarousel, {
  slidesTo: 2,
  slidesToscroll: 2,
  draggable: true,
  scrollLock: true,
  arrows: {
    prev: "#btn--prev",
    next: "#btn--next",
  },
});

const glidesObj = [simpleCarousel, simpleCarouselb, simpleCarouselc];
for (let i = 0; i < glidesObj.length; i++) {
  new Glider(glidesObj[i], {
    slidesTo: 2,
    slidesToscroll: 1,
    draggable: true,
    scrollLock: true,
  });
}
