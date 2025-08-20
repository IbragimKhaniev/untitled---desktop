// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  
  function openMobileMenu() {
    mobileMenuOverlay.classList.add('mobile-menu__overlay--active');
    mobileMenuToggle.classList.add('mobile-menu__toggle--active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('mobile-menu__overlay--active');
    mobileMenuToggle.classList.remove('mobile-menu__toggle--active');
    document.body.style.overflow = '';
  }
  
  // Toggle menu
  mobileMenuToggle.addEventListener('click', function() {
    if (mobileMenuOverlay.classList.contains('mobile-menu__overlay--active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  
  // Close menu
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  
  // Close menu when clicking on overlay background
  mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('mobile-menu__overlay--active')) {
      closeMobileMenu();
    }
  });
  
  // Handle navigation clicks
  const navItems = document.querySelectorAll('.mobile-menu__nav-item');
  navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      navItems.forEach(navItem => navItem.classList.remove('mobile-menu__nav-item--active'));
      // Add active class to clicked item
      this.classList.add('mobile-menu__nav-item--active');
      
      // Close menu after navigation
      setTimeout(() => {
        closeMobileMenu();
      }, 300);
    });
  });
});
