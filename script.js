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
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );
  observer.observe(section);
});


//progress bar
const progressBar = document.createElement('div'); // create div in <body>
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.backgroundColor = '#ffd700';
progressBar.style.width = '0';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar); //add div to body

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop ;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
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