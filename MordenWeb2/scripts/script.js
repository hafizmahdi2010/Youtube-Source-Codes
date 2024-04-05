let menuBtn = document.querySelector(".menuBtn");
let navList = document.querySelector(".navList")
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    menuBtn.style.color = "#fff";
    menuBtn.classList.replace("ri-menu-3-line", "ri-close-fill")
  }
  else {
    menuBtn.style.color = "#000";
    menuBtn.classList.replace("ri-close-fill", "ri-menu-3-line")
  }
})

function swiperJsCode() {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".proSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}
swiperJsCode()

function sheryJsCode() {


  Shery.mouseFollower({
    duration: 2
  });

  Shery.makeMagnet(".mySwiper" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(".banner", {
    style: 6,
    debug: false,
    gooey: true,
    config: { "noiseDetail": { "value": 0, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.6475757702691487 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2] }, "discard_threshold": { "value": 0.53, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0, "range": [0, 2] }, "noise_scale": { "value": 0, "range": [0, 100] } },
  });
}
sheryJsCode()



gsap.registerPlugin(ScrollTrigger);

gsap.to(".upperH1", {
  scrollTrigger: {
    trigger: ".upperH1",
    start: "10% 50%",
    end: "bottom 30%",
    markers: true,
    scrub: true
  },
  width: "100%",
  duration: 1,
})


gsap.to(".color", {
  scrollTrigger: {
    trigger: ".color",
    start: "10% 100%",
    end: "bottom 100%",
    scrub: true,
  },
  // width: "70%",
  // height: "100%",
  scale:3,
  duration: 1
})

const lenis = new Lenis({
  lerp:0.1
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)