document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle Logic
  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
 
  } 

  //  to set the theme
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
   
  }

  //  to toggle the theme
  function toggleTheme() {
    if (document.documentElement.classList.contains('light-mode')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  //  to load the saved theme
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
  }

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


