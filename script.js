// AOS
AOS.init({
  duration: 1200,
  once: false
});

// PARTICLES

tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "transparent"
    }
  },

  fpsLimit: 120,

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },

      resize: true
    },

    modes: {
      repulse: {
        distance: 120,
        duration: 0.4
      }
    }
  },

  particles: {
    color: {
      value: "#00ffff"
    },

    links: {
      color: "#00ffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },

    collisions: {
      enable: false
    },

    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },

      random: false,
      speed: 2,
      straight: false
    },

    number: {
      density: {
        enable: true
      },

      value: 80
    },

    opacity: {
      value: 0.5
    },

    shape: {
      type: "circle"
    },

    size: {
      value: { min: 1, max: 5 }
    }
  },

  detectRetina: true
});

// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});

// 3D TILT EFFECT

const cards = document.querySelectorAll(
  ".project-card, .skill-card, .about-box"
);

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20);
    const rotateY = ((centerX - x) / 20);

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});