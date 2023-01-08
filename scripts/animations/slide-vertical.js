import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ExpoScaleEase, Expo, EasePack } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".images-slide__image");
let titles = gsap.utils.toArray(".highlight__title__item");
let images = document.querySelector(".highlight-image");
if (images) {
  gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      start: "top top",
      trigger: ".highlight",
      // markers: true,
      pin: true,
      pinSpacer: false,
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      end: "+=" + document.querySelector(".highlight__image").offsetWidth,
    },
  });
  // gsap.set(titles, { opacity: 0 });
  gsap.set(titles, { yPercent: -300 });
  gsap.to(titles, {
    yPercent: 10,
    ease: "none",
    // opacity: 1,
    scrollTrigger: {
      start: "top top",
      trigger: ".highlight",
      opacity: 1,
      // markers: true,
      // pin: true,
      scrub: 0.5,
      // snap: 1 / (sections.length - 1),
      end: "+=" + document.querySelector(".highlight__title__item").offsetWidth,
    },
  });
}
