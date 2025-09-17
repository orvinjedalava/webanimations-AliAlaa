document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".square");
  // will automatically play the animation if written in this way
  // you can pause it by calling squareAnimation.pause()
  // you can play it again by calling squareAnimation.play()
  const squareAnimation = element.animate(
    [
      { 
        transform: 'translateX(0)' 
      },
      { 
        backgroundColor: 'blue',
        offset: 0.8,
      },
      { 
        transform: 'translateX(calc(100vw - 100px)) rotate(360deg)',
        backgroundColor: 'crimson'
      }
    ], 
    {
      duration: 3000,
      delay: 1000,
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'linear',
      composite: 'add',
      timeline: document.timeline
    }
  )
  // const squareAnimationKeyframes = new KeyframeEffect(
  //   element,
  //   [
  //     { 
  //       transform: 'translateX(0)' 
  //     },
  //     { 
  //       backgroundColor: 'blue',
  //       offset: 0.8,
  //     },
  //     { 
  //       transform: 'translateX(calc(100vw - 100px)) rotate(360deg)',
  //       backgroundColor: 'crimson'
  //      }
  //   ], 
  //   {
  //     duration: 3000,
  //     delay: 1000,
  //     direction: 'alternate',
  //     fill: 'both',
  //     iterations: Infinity,
  //     easing: 'linear',
  //     composite: 'add',
  //   }
  // );

  // const squareAnimation = new Animation(
  //   squareAnimationKeyframes, 
  //   document.timeline
  // );
  // squareAnimation.play();
});