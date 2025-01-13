let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#main-header h1", {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 1,
  });

  gsap.from("#main-nav a", {
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 1,
    delay: 1.5,
  });

  gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1.5,
    delay: 2,
  });

  gsap.to(".dot", {
    opacity: 1,
    scale: 1.5,
    stagger: 0.2,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
  });
});

window.addEventListener('resize', () => {
    const santa = document.querySelector('.santa');
    santa.style.animation = 'none'; 
    setTimeout(() => {
        santa.style.animation = ''; 
    }, 10);
});

window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset; 
    const scienceSection = document.getElementById('science'); 

    scienceSection.style.backgroundPosition = 'center ' + (scrolled * 0.5) + 'px';
});

document.addEventListener("DOMContentLoaded", () => {
    const santaAudio = document.getElementById("santa-audio");
    const playButton = document.getElementById("play-audio");
    const stopButton = document.getElementById("stop-audio");

    playButton.addEventListener("click", () => {
        santaAudio.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
    });

    stopButton.addEventListener("click", () => {
        santaAudio.pause();  
        santaAudio.currentTime = 0;  
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const northernHemisphere = document.getElementById("northern-hemisphere");
    const southernHemisphere = document.getElementById("southern-hemisphere");
    const hemisphereInfo = document.getElementById("hemisphere-info");
    const hemisphereTitle = document.getElementById("hemisphere-title");
    const hemisphereImage = document.getElementById("hemisphere-image");
    const hemisphereDescription = document.getElementById("hemisphere-description");

    northernHemisphere.addEventListener("click", () => {
        hemisphereTitle.textContent = "Northern Hemisphere";
        hemisphereImage.src = "northern.jpg"; 
        hemisphereDescription.textContent = "In the Northern Hemisphere, the December solstice marks the beginning of winter. Countries like the United States, Canada, Russia, and much of Europe experience their shortest day and longest night. The weather typically becomes colder, and many cultures have developed traditions to bring light and warmth into this dark time of year.";
        
        hemisphereInfo.style.display = "block"; 
    });

    southernHemisphere.addEventListener("click", () => {
        hemisphereTitle.textContent = "Southern Hemisphere";
        hemisphereImage.src = "southern.jpg"; 
        hemisphereDescription.textContent = "In the Southern Hemisphere, the December solstice signals the start of summer. Nations such as Australia, South Africa, and Argentina enjoy their longest day and shortest night. This time is associated with warmth, outdoor activities, and often, summer vacations.";
        
        hemisphereInfo.style.display = "block"; 
    });

    const canvas = document.createElement("canvas");
    canvas.id = "snowfallCanvas";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let snowflakes = [];

    function createSnowflakes() {
        snowflakes = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 2 + 0.5
        }));
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        snowflakes.forEach((snowflake) => {
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function updateSnowflakes() {
        snowflakes.forEach((snowflake) => {
            snowflake.y += snowflake.speed;
            if (snowflake.y > canvas.height) {
                snowflake.y = -snowflake.radius;
                snowflake.x = Math.random() * canvas.width;
            }
        });
    }

    function snowfallAnimation() {
        drawSnowflakes();
        updateSnowflakes();
        requestAnimationFrame(snowfallAnimation);
    }

    createSnowflakes();
    snowfallAnimation();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createSnowflakes();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const celebrations = document.querySelectorAll('.celebration');

    celebrations.forEach((celebration) => {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Read More';
        toggleButton.classList.add('toggle-button');
        
        celebration.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', () => {
            const paragraph = celebration.querySelector('p');
            paragraph.classList.toggle('expanded');

            if (paragraph.classList.contains('expanded')) {
                toggleButton.textContent = 'Read Less';
            } else {
                toggleButton.textContent = 'Read More';
            }
        });
    });
});

document.querySelectorAll('#traditions li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const backToTopLink = document.querySelector('#footer-nav a[href="#main-header"]');

    backToTopLink.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#main-header").scrollIntoView({
            behavior: "smooth"
        });
    });
});


