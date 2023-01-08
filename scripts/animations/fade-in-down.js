import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

let revealContainers = gsap.utils.toArray(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelectorAll(".reveal-img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      // markers: true,
      // toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 3, {
    yPercent: -100,
  });
  tl.from(image, 3, {
    yPercent: 100,
    stagger: 0.3,
    delay: -3,
  });
  // tl.set(".reveal-text", { autoAlpha: 1 });
  tl.from(".reveal-text", 3, {
    xPercent: 10,
    opacity: 1,
  });
  tl.to(".line span", 2, {
    xPercent: 10,
    // scale: 1.3,
    stagger: -0.3,
    delay: -4,
    opacity: 1,
  });
  // tl.staggerFrom(".reveal-text", 2, { opacity: 0, x: 5 }, 0.25);
});
