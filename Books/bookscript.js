// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle Logic
  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
 
  } 

  // Function to set the theme
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
   
  }

  // Function to toggle the theme
  function toggleTheme() {
    if (document.documentElement.classList.contains('light-mode')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Function to load the saved theme
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
  }

  // Load the theme when the page loads
  loadTheme();
});


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


