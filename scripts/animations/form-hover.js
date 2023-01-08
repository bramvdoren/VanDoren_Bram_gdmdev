import gsap from "gsap";

const arrow = document.querySelector(".contact__form__button__arrow");
const button = document.querySelector(".contact__form__button");
const rotate = () => {
  gsap.to(arrow, {
    duration: 0.5,
    rotate: -90,
  });
};
const rotateBack = () => {
  gsap.to(arrow, {
    duration: 0.5,
    rotate: 0,
  });
};
if (button) {
  button.addEventListener("mouseenter", rotate);
  button.addEventListener("mouseleave", rotateBack);
}
