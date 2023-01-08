import gsap from "gsap";
import SplitType from "split-type";
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const menuDiv = document.querySelector(".menuDiv");
const menuDivBtn = document.querySelector(".menuDiv__button");
let lastScroll = 0;
const app = document.getElementById("app");
let sticky = header.offsetTop;
const ourWork = document.querySelector(".menuDiv__pages.pages__ourWork");
const titels = document.querySelectorAll(".menuDiv__pages");
const about = document.querySelector(".pages__about");
const contact = document.querySelector(".pages__contact");
let image = document.querySelectorAll(".menuDiv__image");

//sticky
window.onscroll = function () {
  stickyScroll();
};

function stickyScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//only upscroll
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    gsap.to(header, {
      yPercent: -100,
    });
  } else if (currentScroll < lastScroll) {
    gsap.to(header, {
      yPercent: 0,
    });
  }
  lastScroll = currentScroll;
});

//slide photos
const fourWork = () => {
  gsap.to(image, {
    yPercent: -100,
  });
};
const fabout = () => {
  gsap.to(image, {
    yPercent: -200,
  });
};
const fcontact = () => {
  gsap.to(image, {
    yPercent: -300,
  });
};
const slideFirst = () => {
  gsap.to(image, {
    yPercent: 0,
  });
};

ourWork.onmouseenter = function () {
  fourWork();
};
ourWork.onmouseleave = function () {
  slideFirst();
};
about.onmouseenter = function () {
  fabout();
};
about.onmouseleave = function () {
  slideFirst();
};
contact.onmouseenter = function () {
  fcontact();
};
contact.onmouseleave = function () {
  slideFirst();
};

//Show Menu
const openMenu = () => {
  header.style.display = "none";
  gsap.from(menuDiv, {
    yPercent:-100,
    opacity:0
  });
  /**
 * ANIMATION MENU TITEL
 */

  const animateCharacters = (els, height = titels.offsetWidth) =>
    gsap.from(els, {
      y: height,
      stagger: {
        amount: 0.5,
      },
      duration: 1.5,
    });

    const splitText = (el) => {
      const { chars } = new SplitType(el, {
        types: "chars",
      });
      return chars;
    };

    if (titels?.length) {
      titels.forEach((animatedElement) => {
        animateCharacters(splitText(animatedElement));
      });
    }
    gsap.to(menuDiv, {
      yPercent:0,
      display: "block",
      duration: 1,
      stagger: 0.2,
      opacity:1,
    });
};

const closeMenu = () => {
  gsap.to(header, {
    display: "flex",
    stagger: 0.2,
  });
  menuDiv.style.display = "none";
};


menu.addEventListener("click", openMenu);
menuDivBtn.addEventListener("click", closeMenu);
