import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

// export const aboutSlideVerticalTrigger = () => {
gsap.registerPlugin(ScrollTrigger);
let sections = document.querySelectorAll(".about__intro__images__image");
// gsap.set(sections, { yPercent: 300 });

sections.forEach((el) => {
  gsap.to(el, {
    y: "90vh",
    duration: 2,
    delay: 5,
  });
  gsap.to(el, {
    y: "180vh",
    duration: 2,
    delay: 12,
  });
  gsap.to(el, {
    y: "270vh",
    duration: 2,
    delay: 19,
  });
});

// gsap.to(sections, {
//   yPercent: 100 * (sections.length - 1),
//   ease: "none",
//   delay: 2,
//   repeat: -1,
//   // scrollTrigger: {
//   //   start: "top top",
//   //   trigger: ".about__intro__images",
//   //   markers: true,
//   //   scrub: 0.5,
//   //   // snap: 1 / (sections.length - 1),
//   //   end: () =>
//   //     "+=" + document.querySelector(".about__intro__images").offsetWidth,
//   // },
// });
// };
