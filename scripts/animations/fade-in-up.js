import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='fade-in-up']");

if (elements) {
  elements.forEach((el) =>
    gsap.from(el, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: el,
        start: "center 100%",
      },
    })
  );
}
