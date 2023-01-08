import gsap from "gsap";

const elements = gsap.utils.toArray("[data-animation='zoom-image-out']");
const elementsDiv = gsap.utils.toArray("[data-animation='zoom-imageDivOut']");

const zoom = () => {
  gsap.set(elements, {
    scale: "4",
    backgroundPosition: "center",
  });
  gsap.to(elements, {
    scale: "1.5",
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
