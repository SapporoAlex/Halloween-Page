const audioFiles = {
    1: new Audio('static/audio/1 cat.mp3'),
    2: new Audio('static/audio/2 bat.mp3'),
    3: new Audio('static/audio/3 giant.mp3'),
    4: new Audio('static/audio/4 snake.mp3'),
    5: new Audio('static/audio/5 vampire.mp3'),
    6: new Audio('static/audio/6 duck.mp3'),
    7: new Audio('static/audio/7 werewolf.mp3'),
    8: new Audio('static/audio/8 witch.mp3'),
    9: new Audio('static/audio/9 zombie.mp3')
};

// Preload the audio files by loading them
Object.values(audioFiles).forEach(audio => audio.load());

// Handle play sound button click
document.querySelectorAll('.play-sound').forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        if (audioFiles[soundId]) {
            audioFiles[soundId].currentTime = 0; // Reset the audio to the beginning
            audioFiles[soundId].play();
        }
    });
});

// Handle stop sound button click
document.querySelectorAll('.stop-sound').forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        if (audioFiles[soundId]) {
            audioFiles[soundId].pause();
            audioFiles[soundId].currentTime = 0; // Reset the audio to the beginning
        }
    });
});

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