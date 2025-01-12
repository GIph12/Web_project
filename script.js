const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {                      // add sticky class to header
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


const sections = document.querySelectorAll('section');
sections.forEach(section => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.2} // Trigger when 20% of the section is visible
  );
  observer.observe(section);
});







const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const books = document.querySelectorAll('.book');

const filterBooks = () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  books.forEach(book => {
    const title = book.querySelector('h3').textContent.toLowerCase();
    const author = book.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || author.includes(searchTerm)) {
      book.style.display = 'block'; // Show the book
    } else {
      book.style.display = 'none'; // Hide the book
    }
  });
};

// Search on button click
searchButton.addEventListener('click', filterBooks);

// Search on pressing Enter
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterBooks();
  }
});

// Clear search and show all books when the search input is empty
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    books.forEach(book => {
      book.style.display = 'block'; // Show all books
    });
  }
});

