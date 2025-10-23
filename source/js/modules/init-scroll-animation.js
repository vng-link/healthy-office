import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const main = document.querySelector('[data-scroll-animation]');
const breakpointMedia = window.matchMedia('(max-width: 807px)');

let timeline = null;

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    if (timeline) {
      timeline.kill();
    }
  } else {
    getScrollAnimation();
  }
};

const getScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parent = main.parentElement;
  const style = window.getComputedStyle(parent);
  const block = main.querySelector('[data-scroll-animation-block]');
  const lenis = new Lenis();
  const header = document.querySelector("[data-header]");

  const raf = (time) => {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: main,
      start: `top-=${style.paddingTop} top`,
      end: () => '+=' + block.offsetHeight,
      scrub: 1,
      pin: !0,
      /*onLeave: () => {
        console.log("hello 1")
        header.classList.add("is-active");
      },*/
      onLeaveBack: () => {
        console.log("hello 2")
      },
    },
  }).to(block, {
    ease: 'none',
    y: 0,
    duration: 1,
  });
};

const initScrollAnimation = () => {
  if (!main) {
    return;
  }

  breakpointMedia.addListener(breakpointChecker);
  breakpointChecker();
};

export {initScrollAnimation};
