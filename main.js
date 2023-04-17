import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register scroll trigger plugin
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const cards = document.querySelectorAll(".img-container");

let tl = new gsap.timeline({
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top bottom",
    end: "+=650",
    scrub: 1,
  },
});

cards.forEach((card) => {
  let rotation = Math.floor(Math.random() * 40) - 20;
  let positionX = Math.floor(Math.random() * 300) - 150;
  let positionY = Math.floor(Math.random() * 300) - 100;

  tl.from(
    card,
    {
      rotation: rotation,
      x: positionX,
      y: positionY,
    },
    "-=1"
  );

  tl.to(
    card,
    {
      backgroundSize: "100%",
    },
    0.2
  );
});
