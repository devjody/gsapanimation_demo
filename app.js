const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// old
// const tween = new TweenLite('.cover', 2, {
//      width: "40%"
// });

// new
// const tween = gsap.to('.cover', {
//     duration: 2,
//     width: "50%"
// });

// new
const myTimeLine = gsap.timeline({ paused: true, reversed: true });

myTimeLine
  .to(".cover", {
    duration: 1,
    width: "60%",
    ease: "power2.easeOut",
  })
  .to(
    "nav",
    {
      duration: 0.8,
      height: "100%",
      ease: "power2.easeOut",
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    {
      duration: 0.5,
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function() {
          navOpen.style.pointerEvents = 'auto';
      }
    }
  );

navButton.addEventListener("click", () => {
  toggleTween(myTimeLine);
});

const toggleTween = (myTimeLine) => {
    myTimeLine.reversed() ? myTimeLine.play() : myTimeLine.reverse();
}
