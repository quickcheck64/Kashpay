// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMobile = document.querySelector(".nav-mobile")
  let mobileMenuOpen = false

  if (mobileMenuToggle && navMobile) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuOpen = !mobileMenuOpen
      navMobile.style.display = mobileMenuOpen ? "block" : "none"

      // Update icon
      const icon = mobileMenuToggle.querySelector("i")
      icon.className = mobileMenuOpen ? "fas fa-times" : "fas fa-bars"
    })

    // Close mobile menu when clicking on a link
    const mobileLinks = navMobile.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuOpen = false
        navMobile.style.display = "none"
        const icon = mobileMenuToggle.querySelector("i")
        icon.className = "fas fa-bars"
      })
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      header.style.background = "rgba(30, 64, 175, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%)"
      header.style.backdropFilter = "none"
    }

    lastScrollTop = scrollTop
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".feature-card, .stat, .testimonial-text, .whatsapp-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Dynamic year in footer
  const footerYear = document.querySelector(".footer-bottom p")
  if (footerYear) {
    const currentYear = new Date().getFullYear()
    footerYear.innerHTML = `&copy; ${currentYear} Kashpay Finance. All Rights Reserved.`
  }

  // Button hover effects
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .whatsapp-button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
    })
  })

  // Parallax effect for hero section
  const hero = document.querySelector(".hero")
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    })
  }

  // Loading animation
  window.addEventListener("load", () => {
    document.body.style.opacity = "1"
    document.body.style.transform = "translateY(0)"
  })

  // Add loading styles
  document.body.style.opacity = "0"
  document.body.style.transform = "translateY(20px)"
  document.body.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
  // Any heavy scroll operations can go here
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
