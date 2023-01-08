import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='sticky']");
if (elements) {
  if (window.matchMedia("(max-width: 500px)").matches) {
    elements.forEach((el) => {
      const flippingWordsContainer = el.querySelector("[data-words]");
      const words = flippingWordsContainer
        .getAttribute("data-words")
        .split(",");
      const imagesHeight = document
        .querySelector(".images-grid")
        .getBoundingClientRect().height;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.innerHTML = word;
        flippingWordsContainer.appendChild(span);
      });
      return gsap.to(el, {
        // yPercent: 50,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${imagesHeight}`,
          // pin: true,
          // markers: true,
          onUpdate: (self) => {
            gsap.to(flippingWordsContainer, {
              y: `-${(self.progress * 100).toFixed(0)}%`,
              transformOrigin: "left bottom",
            });
          },
        },
      });
    });
  } else {
    elements.forEach((el) => {
      const flippingWordsContainer = el.querySelector("[data-words]");
      const words = flippingWordsContainer
        .getAttribute("data-words")
        .split(",");
      const imagesHeight = document
        .querySelector(".images-grid")
        .getBoundingClientRect().height;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.innerHTML = word;
        flippingWordsContainer.appendChild(span);
      });
      return gsap.to(el, {
        // yPercent: 50,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${imagesHeight}`,
          pin: true,
          // markers: true,
          onUpdate: (self) => {
            gsap.to(flippingWordsContainer, {
              y: `-${(self.progress * 100).toFixed(0)}%`,
              transformOrigin: "left bottom",
            });
          },
        },
      });
    });
  }
}
