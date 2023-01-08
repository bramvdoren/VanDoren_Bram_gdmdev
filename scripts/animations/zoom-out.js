import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { SlowMo } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ell = document.querySelector(".contact");
const block = document.querySelector(".contact__text");
// gsap.from(ell, {
//   backgroundSize: "160%",
//   backgroundPosition: "50% 50%",
// });
// gsap.to(ell, {
//   backgroundSize: "120%",
//   backgroundPosition: "50% 30%",
//   scrollTrigger: {
//     start: "top bottom",
//     end: "top top",
//     trigger: ell,
//     // markers: true,
//     toggleActions: "play reverse play reverse",
//   },
// });
gsap.set(block, { yPercent: -20 });
gsap.set(block, { fillOpacity: 0 });
gsap.to(block, {
  yPercent: -40,
  ease: SlowMo,
  fillOpacity: 1,
  scrollTrigger: {
    start: "top 50%",
    trigger: block,
    scrub: true,
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});
gsap.set(block, { fillOpacity: 0 });
