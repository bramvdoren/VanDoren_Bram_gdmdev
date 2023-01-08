import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='reveal-item']");

if (elements) {
  elements.forEach((el) =>
    gsap.from(el, {
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: "center 100%",
      },
    })
  );
}