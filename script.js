document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        const overlay = this.nextElementSibling;
        if (overlay.style.display === 'none' || overlay.style.display === '') {
            overlay.style.display = 'block'; // Show the text
        } else {
            overlay.style.display = 'none'; // Hide the text if clicked again
        }
    });
});

document.querySelectorAll('.cover-image').forEach(image => {
    image.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; // Show the text
            this.style.display = 'none'
        } else {
            answer.style.display = 'none'; // Hide the text if clicked again
            this.style.display = 'block';
        }
    });
});


document.querySelectorAll('.play-sound').forEach(button => {
    let audio = null;

    button.addEventListener('click', function() {
        const audioSrc = this.getAttribute('data-sound');

        // Create or update the audio instance
        if (!audio || audio.src !== audioSrc) {
            audio = new Audio(audioSrc);
        }

        // Play or pause the audio
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning
        }
    });

    // Get the sibling stop button
    const stopButton = button.nextElementSibling;

    stopButton.addEventListener('click', function() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning
        }
    });
});

document.addEventListener('mousemove', (event) => {
    const navColumn = document.getElementById('nav-column');
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;

    // If the mouse is within 10 pixels of the right edge
    if (mouseX <= (screenWidth - 300)) {
        navColumn.style.transform = 'translateX(100%)'; // Show the nav
    } else {
        navColumn.style.transform = 'translateX(0)'; // Hide the nav
    }
});

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'animate' class to make the h1 move into the screen
        entry.target.classList.add('animate');
      } else {
        // Optionally remove the 'animate' class if you want the animation to reset when out of view
        entry.target.classList.remove('animate');
      }
    });
  });
  
  // Target all the h1 elements you want to animate
  const h1Elements = document.querySelectorAll('.animated-h1');
  
  // Observe each h1 element
  h1Elements.forEach(h1 => observer.observe(h1));