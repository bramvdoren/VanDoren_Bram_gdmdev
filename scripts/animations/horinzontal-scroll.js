import gsap from "gsap";

const additionalX = { val: 0 };
let offset = 0;
const logos = gsap.utils.toArray(".about__features__scroll-image");
const scrollDiv = document.querySelector(".about__features__scroll");

if (logos) {
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    scrollDiv.appendChild(clone);
  });
  let images = gsap.utils.toArray(".about__features__scroll-image");
  if (images) {
    // SET ANIMATION
    images.forEach((image) => {
      gsap.to(image, {
        x: "-=" + scrollDiv.offsetWidth,
        duration: 15,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            offset += additionalX.val;
            x = (parseFloat(x) + offset) % -Number(scrollDiv.offsetWidth * 0.5);
            return x;
          }),
        },
      });
    });
  }
}
