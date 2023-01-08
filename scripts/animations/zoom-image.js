import gsap from "gsap";

const elements = gsap.utils.toArray("[data-animation='zoom-image']");
const elementsDiv = gsap.utils.toArray("[data-animation='zoom-imageDiv']");

const zoom = () => {
  gsap.set(elements, {
    scale: "1",
    backgroundPosition: "center",
  });
  gsap.to(elements, {
    scale: "3",
    scrollTrigger: {
      start: "top bottom",
      trigger: elementsDiv,
      // markers: true,
      toggleActions: "play reverse play reverse",
    },
  });
};
if (elements) {
  zoom();
}
