function SheryCode(){
  // mouse follower
  Shery.mouseFollower({
    // skew: true,
    duration: 2,
  });

  Shery.makeMagnet(".menuBtn" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".downArrow" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

SheryCode()