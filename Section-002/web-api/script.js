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
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'linear',
      composite: 'add',
      iterationComposite: 'accumulate', // default is 'replace'. only works on firefox at this writing.
      timeline: document.timeline
    }
  )
  squareAnimation.pause();

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('play')) {
        squareAnimation.play();
      } else if (button.classList.contains('pause')) {
        squareAnimation.pause();
      } else if (button.classList.contains('cancel')) {
        squareAnimation.cancel();
      } else if (button.classList.contains('reverse')) {
        squareAnimation.reverse();
      } else if (button.classList.contains('finish')) {
        squareAnimation.finish();
      } 
      // else if (button.classList.contains('reset')) {
      //   squareAnimation.currentTime = 0;
      // }
    });
  });

  const playbackRateInput = document.getElementById('playbackRateInput');
  const playbackRateValue = document.getElementById('playbackRateInputValue');

  playbackRateInput.addEventListener('input', (e) => {
    squareAnimation.updatePlaybackRate(e.target.value);
    playbackRateValue.value = e.target.value;
  });
});