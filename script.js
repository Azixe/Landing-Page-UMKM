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
    // Smooth scroll for navigation links (only same-page navigation)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle same-page navigation (links that start directly with #)
      // Don't interfere with cross-page navigation (like index.html#contact)
      if (href.startsWith('#') && !href.includes('.html')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
      // For cross-page navigation, let the browser handle it naturally
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

// Enhanced Menu Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Menu Filter Functionality
  const filterTabs = document.querySelectorAll('.filter-tab');
  const menuTiles = document.querySelectorAll('.menu-tile');
  const searchInput = document.getElementById('menu-search');

  // Filter by category
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Filter menu tiles
      menuTiles.forEach(tile => {
        const tileCategory = tile.getAttribute('data-category');
        const isCategory = tile.classList.contains('menu-category');
        
        if (category === 'all' || tileCategory === category || isCategory) {
          tile.style.display = 'block';
          tile.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      menuTiles.forEach(tile => {
        const title = tile.querySelector('.menu-title');
        const note = tile.querySelector('.menu-note');
        const isCategory = tile.classList.contains('menu-category');
        
        if (isCategory) {
          return; // Don't filter category headers
        }
        
        const titleText = title ? title.textContent.toLowerCase() : '';
        const noteText = note ? note.textContent.toLowerCase() : '';
        
        if (titleText.includes(searchTerm) || noteText.includes(searchTerm)) {
          tile.style.display = 'block';
          tile.style.animation = 'fadeInUp 0.3s ease forwards';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  }

  // Enhanced menu tile hover effects
  menuTiles.forEach(tile => {
    if (!tile.classList.contains('menu-category')) {
      tile.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02) rotateX(5deg)';
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(226, 61, 61, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: rippleEffect 0.6s ease-out;
          pointer-events: none;
          z-index: 1;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.remove();
          }
        }, 600);
      });
      
      tile.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateX(0)';
      });
    }
  });

  // Add CSS animation for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleEffect {
      to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Enhanced menu tile 3D hover effect */
    .menu-tile:not(.menu-category) {
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    /* Smooth category transitions */
    .menu-category {
      transition: all 0.3s ease;
    }
    
    /* Price highlighting animation */
    .menu-price strong {
      display: inline-block;
      transition: all 0.3s ease;
    }
    
    .menu-tile:hover .menu-price strong {
      transform: scale(1.1);
      text-shadow: 0 2px 8px rgba(226, 61, 61, 0.3);
    }
  `;
  document.head.appendChild(style);

  // Auto-update statistics
  function updateMenuStats() {
    const visibleTiles = document.querySelectorAll('.menu-tile:not(.menu-category):not([style*="display: none"])');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
      statNumbers[0].textContent = visibleTiles.length + '+';
    }
  }

  // Call update stats when filters change
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setTimeout(updateMenuStats, 100);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      setTimeout(updateMenuStats, 100);
    });
  }

  // Initialize stats
  updateMenuStats();
  // Smooth scroll enhancement for menu navigation (same-page only)
  const menuLinks = document.querySelectorAll('a[href^="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Only handle same-page navigation (href starts with # and no .html)
      if (href.startsWith('#') && !href.includes('.html')) {
        e.preventDefault();
        const targetId = href.substring(1); // Remove the # symbol
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.getElementById('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }      }
      // Let cross-page navigation (like index.html#contact) work naturally
    });
  });
});
