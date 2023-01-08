import gsap from "gsap";
import SplitType from "split-type";
/**
 * ANIMATION HEADER TITEL
 */
const titelheader = document.querySelectorAll(".contact__header__title");

const animateCharacters = (
  els,
  height = document.querySelector(".contact__header__title").offsetWidth
) =>
  gsap.from(els, {
    y: height,
    stagger: {
      amount: 0.5,
    },
    duration: 1.5,
    scrollTrigger: {
      start: "center center",
      trigger: ".contact__header",
      // markers: true,
      // toggleActions: "play reverse play reverse",
    },
  });

const splitText = (el) => {
  const { chars } = new SplitType(el, {
    types: "chars",
  });
  return chars;
};

if (titelheader?.length) {
  titelheader.forEach((animatedElement) => {
    animateCharacters(splitText(animatedElement));
  });
}

gsap.from(".contact__info__content__text", {
  yPercent: 100,
  duration: 1.5,
  delay:0.5,
  autoAlpha: 0,
  scrollTrigger: {
    start: "center center",
    trigger: "header",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".contact__info__content__link", {
  yPercent: 100,
  duration: 1.5,
  opacity: 0,
  delay:0.5,
  scrollTrigger: {
    start: "center center",
    trigger: "header",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});
