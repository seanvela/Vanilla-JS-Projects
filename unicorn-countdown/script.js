document.addEventListener('DOMContentLoaded', function() {
    const countdownWrapper = document.getElementById('countdown');
    const h1Element = document.querySelector('h1');
    let timer;
  
    function updateCountdown() {
      const secondsElement = document.getElementById('seconds');
      let countdown = parseInt(secondsElement.textContent);
      countdown--;
  
      if (countdown < 0) {
        clearInterval(timer);
        revealEthanImage();
      } else {
        secondsElement.textContent = countdown;
      }
    }
  
    function startCountdown() {
      const music = document.getElementById('backgroundMusic');
      let countdown = parseInt(document.getElementById('seconds').textContent);
      if (countdown === 10) {
        timer = setInterval(updateCountdown, 1000);
        music.play();
  
        // Stop the music after 23 seconds (30000 milliseconds)
        setTimeout(function() {
          music.pause();
          music.currentTime = 0; // Reset audio to the beginning
        }, 25000);
  
        countdownWrapper.removeEventListener('click', startCountdown); // Remove event listener after starting countdown
      }
    };
  
    function revealEthanImage() {
      const secondsElement = document.getElementById('seconds');
      secondsElement.style.display = 'none'; // Hide the countdown timer
      h1Element.style.display = 'none'; // Hide the h1 element
      const revealImage = document.getElementById('revealImage');
      revealImage.src = 'img/ethan.jpeg'; // Ethan's image path
      revealImage.style.display = 'block'; // Show Ethan's image
    }
  
    countdownWrapper.addEventListener('click', startCountdown); // Add event listener for countdown start
  });
  