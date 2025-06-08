document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const hamburger = document.getElementById('hamburger');
  const navBar = document.getElementById('nav-bar');
    // Function to close mobile menu
  function closeMobileMenu() {
    navBar.classList.remove('active');
    hamburger.classList.remove('active');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    document.body.style.overflow = '';
  }
    hamburger.addEventListener('click', function() {
    navBar.classList.toggle('active');
    this.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      document.body.style.overflow = 'hidden';
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Close mobile menu when clicking outside (overlay)
  document.addEventListener('click', function(e) {
    if (navBar.classList.contains('active') && 
        !navBar.contains(e.target) && 
        !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });
    // Close mobile menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navBar.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Handle window resize - close mobile menu if switching to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navBar.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to nav links based on scroll position
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
  // Handle scroll to top button visibility with improved threshold and animations
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollToTopButton) {
      // Show button after 300px of scrolling
      if (scrollPosition > 300) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
      
      // Add pulse effect when reaching bottom of page
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollPosition + clientHeight >= scrollHeight - 100) {
        scrollToTopButton.classList.add('pulse');
      } else {
        scrollToTopButton.classList.remove('pulse');
      }
    }
  });
  
  // Enhanced scroll to top button functionality
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      // Add a nice animation class when clicked
      scrollToTopButton.classList.add('clicked');
      
      // Scroll to top with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Remove animation class after animation completes
      setTimeout(() => {
        scrollToTopButton.classList.remove('clicked');
      }, 700);
    });
  }
  
  // Add animation on scroll
  const fadeElements = document.querySelectorAll('.sec-content-div, .tile, .eye-grabber, .eye-grabber-img');
  
  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    });
  }, fadeInOptions);
  
  fadeElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    element.style.transform = "translateY(20px)";
    fadeInObserver.observe(element);
  });
    // Enhanced animation for menu tiles with data-aos attributes
  const animateMenuTiles = () => {
    document.querySelectorAll('.menu-tile[data-aos]').forEach((tile, index) => {
      // Staggered reveal animation with increasing delays for each item
      setTimeout(() => {
        tile.style.opacity = "1";
        tile.style.transform = "translateY(0)";
      }, 100 + (index * 80)); // Staggered animation with shorter intervals
    });
  };
  
  // Initialize menu tile animations with improved transitions
  if (document.querySelectorAll('.menu-tile[data-aos]').length > 0) {
    document.querySelectorAll('.menu-tile[data-aos]').forEach((tile, index) => {
      tile.style.opacity = "0";
      tile.style.transform = "translateY(30px)";
      tile.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      
      // Add varying delays based on position in grid
      const delay = parseInt(tile.getAttribute('data-aos-delay') || '0');
      tile.style.transitionDelay = (delay / 1000) + "s";
    });
    
    // Enhanced animation trigger with IntersectionObserver for better performance
    const menuObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start animation after the menu section is visible
        setTimeout(animateMenuTiles, 200);
        menuObserver.disconnect(); // Only run once
      }
    }, { threshold: 0.1 });
    
    // Observe the menu section
    const menuSection = document.querySelector('#menu') || document.querySelector('#menu-page');
    if (menuSection) {
      menuObserver.observe(menuSection);
    } else {
      // Fallback if menu section not found
      setTimeout(animateMenuTiles, 300);
    }  }
    // Hero Stats Counter Animation
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const options = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          const duration = 2500; // 2.5 seconds for smoother effect
          const startTime = performance.now();
          
          // Determine if we should add a "+" suffix
          const shouldAddPlus = target >= 50;
          
          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easing function for smoother animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            if (progress < 1) {
              counter.textContent = current;
              requestAnimationFrame(updateCounter);
            } else {
              // Final value with + suffix if needed
              counter.textContent = target + (shouldAddPlus ? '+' : '');
              
              // Add a pulse effect when animation completes
              counter.style.transform = 'scale(1.15)';
              setTimeout(() => {
                counter.style.transform = 'scale(1)';
              }, 300);
            }
          };
          
          // Start the animation
          requestAnimationFrame(updateCounter);
          observer.unobserve(counter);
        }
      });
    }, options);
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  // Initialize counter animation
  animateCounters();
  
  // Check if user is on mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Force display menu items immediately on mobile devices
    document.querySelectorAll('.menu-tile[data-aos]').forEach(function(tile) {
      tile.style.opacity = "1";
      tile.style.transform = "translateY(0)";
      tile.style.transition = "none";
    });
  }
});
