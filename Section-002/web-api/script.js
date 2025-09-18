document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".square");
  // will automatically play the animation if written in this way
  // you can pause it by calling squareAnimation.pause()
  // you can play it again by calling squareAnimation.play()
  const squareAnimation = element.animate(
    
    [
      { 
        transform: 'translateX(0)',
        easing: 'ease-in', 
      },
      { 
        backgroundColor: 'blue',
        offset: 0.8,
        composite: 'replace',
      },
      { 
        transform: 'translateX(calc(100vw - 100px)) rotate(360deg)',
        backgroundColor: 'crimson'
      }
    ], 
    {
      duration: 3000,
      delay: 1000,
      direction: 'normal',
      fill: 'both',
      iterations: Infinity,
      easing: 'linear',
      composite: 'add',
      iterationComposite: 'accumulate', // default is 'replace'. only works on firefox at this writing.
      timeline: document.timeline
    }
  )
  // squareAnimation.pause();
});