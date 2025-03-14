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

  // load the saved theme
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
  }

  
  loadTheme();
});

// Scroll sticky
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});



// Search  
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const books = document.querySelectorAll('.book');

const filterBooks = () => {

  const searchTerm = searchInput.value.trim().toLowerCase();

  books.forEach(book => {
    const title = book.querySelector('h3').textContent.toLowerCase();
    const author = book.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || author.includes(searchTerm)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
};

searchButton.addEventListener('click', filterBooks);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterBooks();
  }
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    books.forEach(book => {
      book.style.display = 'block';
    });
  }
});



