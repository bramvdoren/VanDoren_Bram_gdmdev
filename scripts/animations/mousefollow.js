import gsap from "gsap";

const cursor = document.querySelector(".cursor");
const mousetext = document.querySelector(".cursor-text");
if (cursor) {
  gsap.set(cursor, { x: 0, y: 0 });

  let targets = gsap.utils.toArray(cursor);
  // const word = cursor.innerHTML.split("");
  // console.log(word);

  document.querySelector(".images-slide").addEventListener("mousemove", (e) => {
    targets.forEach((el) => {
      gsap.to(el, {
        duration: 0.35,
        x: e.x,
        y: e.y,
        ease: "none",
        overwrite: "auto",
        stagger: 0.035,
      });
    });
  });
}
