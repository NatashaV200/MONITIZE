window.addEventListener("load", () => {
  const content = document.querySelector(".hero-content");
  if (content) {
    content.style.opacity = "0";
    content.style.transform = "translateY(30px)";

    setTimeout(() => {
      content.style.transition = "all 1s ease";
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    }, 200);
  }

  const signupSection = document.querySelector(".signup-section");
  const loginSection = document.querySelector(".login-section");

  // Close modal when clicking outside
  const closeModal = (section) => {
    section.classList.remove("active");
  };

  if (signupSection) {
    signupSection.addEventListener("click", (e) => {
      if (e.target === signupSection) {
        closeModal(signupSection);
      }
    });
  }

  if (loginSection) {
    loginSection.addEventListener("click", (e) => {
      if (e.target === loginSection) {
        closeModal(loginSection);
      }
    });
  }

  // Hide all page sections and show only home on load
  const hideAllSections = () => {
    document.querySelectorAll(".page-section").forEach(section => {
      section.classList.remove("active");
    });
  };

  const showSection = (sectionId) => {
    hideAllSections();
    
    // Special handling for home - show all home-section elements
    if (sectionId === "home") {
      document.querySelectorAll(".home-section").forEach(section => {
        section.classList.add("active");
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.add("active");
      }
    }
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show home section on initial load
  showSection("home");

  const signupLink = document.querySelector('a[href="#sign-up"]');
  const loginLink = document.querySelector('a[href="#log-in"]');
  const aboutLink = document.querySelector('a[href="#about"]');
  const dashboardLink = document.querySelector('a[href="#dashboard"]');
  const homeLink = document.querySelector('a[href="#home"]');
  const getStartedButton = document.querySelector(".hero-section .primary-btn");
  const signInButton = document.querySelector(".hero-section .secondary-btn");

  if (signupLink) {
    signupLink.addEventListener("click", (event) => {
      event.preventDefault();
      signupSection.classList.add("active");
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      loginSection.classList.add("active");
    });
  }

  if (aboutLink) {
    aboutLink.addEventListener("click", (event) => {
      event.preventDefault();
      showSection("about");
    });
  }

  if (dashboardLink) {
    dashboardLink.addEventListener("click", (event) => {
      event.preventDefault();
      showSection("dashboard");
    });
  }

  if (homeLink) {
    homeLink.addEventListener("click", (event) => {
      event.preventDefault();
      showSection("home");
    });
  }

  if (getStartedButton) {
    getStartedButton.addEventListener("click", (event) => {
      event.preventDefault();
      signupSection.classList.add("active");
    });
  }

  if (signInButton) {
    signInButton.addEventListener("click", (event) => {
      event.preventDefault();
      loginSection.classList.add("active");
    });
  }

  // Close modals with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      loginSection?.classList.remove("active");
      signupSection?.classList.remove("active");
    }
  });
});