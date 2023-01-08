/**
 * ANIMATION FOOTER ITEMS
 */
import gsap from "gsap";
import all from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Power2 from "gsap";

const items = document.querySelectorAll(".footer__list-item");
gsap.set(".footer__list-item", {
  autoAlpha: 0,
  y: 20,
});
gsap.to(".footer__list-item", {
  y: 0,
  autoAlpha: 1,
  duration: 1.5,
  delay: 1,
  scrollTrigger: {
    start: "bottom-=15 bottom",
    trigger: "footer",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});

/**
 * ANIMATION FOOTER TITEL
 */
const titelFooter = document.querySelectorAll(".footer__title");

const animateCharacters = (
  els,
  height = document.querySelector(".footer__title").offsetWidth
) =>
  gsap.from(els, {
    y: height,
    stagger: {
      amount: 0.5,
    },
    duration: 1.5,
    scrollTrigger: {
      start: "top bottom",
      trigger: "footer",
      // markers: true,
      toggleActions: "play reverse play reverse",
    },
  });

const splitText = (el) => {
  const { chars } = new SplitType(el, {
    types: "chars",
  });
  return chars;
};

if (titelFooter?.length) {
  titelFooter.forEach((animatedElement) => {
    animateCharacters(splitText(animatedElement));
  });
}
/**
 * ANIMATION SHINE ITEMS
 */
items.forEach((item) => {
  const shine = () => {
    gsap.fromTo(
      item,
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.1, ease: Power2.easeInOut }
    );
  };
  item.addEventListener("mouseenter", shine);
});
