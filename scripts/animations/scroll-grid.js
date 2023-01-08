import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const elements = gsap.utils.toArray("[data-animation='scroll-grid']");

const button = document.querySelector(".all-projects__title");
const tl = gsap.timeline({ repeat: -1 });

function doFlip() {
  // Get the initial state
  const state = Flip.getState(".all-projects__grid_image");

  // Make DOM or styling changes (swap the squares in our case)
  swap(elements);

  // Animate from the initial state to the end state
  Flip.from(state, { duration: 3 });
}

// Given an Array of two siblings, append the one that's first so it's last (swap)
function swap([a, b]) {
  a.parentNode.children[0] === a
    ? a.parentNode.appendChild(a)
    : a.parentNode.appendChild(b);
}
if (button) {
  button.addEventListener("mouseenter", doFlip);
}
