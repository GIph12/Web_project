

// File paths for Chapter 1 and Chapter 2
const chapterFiles = {
  chapter1: 'Chapter1.txt',
  chapter2: 'Chapter2.txt',
};

let currentChapter = null; // Stores the current chapter content
let currentPage = 0; // Tracks the current page
let pages = []; // Stores the split pages of the current chapter
const wordsPerPage = 400; // Adjust this to control how many words per page

// Load a chapter from a file
function loadChapter(filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
      currentChapter = text;
      pages = splitIntoPages(currentChapter, wordsPerPage);
      currentPage = 0;
      displayPage();
      updateProgressBar();
    })
    .catch((error) => console.error('Error loading chapter:', error));
}

// Split chapter content into pages
function splitIntoPages(text, wordsPerPage) {
  const words = text.split(' ');
  const pages = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    pages.push(words.slice(i, i + wordsPerPage).join(' '));
  }
  return pages;
}

// Display the current page
function displayPage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = pages[currentPage] || 'No content available.';
}

// Update the progress bar
function updateProgressBar() {
  const progress = ((currentPage + 1) / pages.length) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
}

// Event listeners for loading chapters
document.getElementById('loadChapter1').addEventListener('click', () => {
  loadChapter(chapterFiles.chapter1);
});

document.getElementById('loadChapter2').addEventListener('click', () => {
  loadChapter(chapterFiles.chapter2);
});

// Event listeners for navigation
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayPage();
    updateProgressBar();
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    displayPage();
    updateProgressBar();
  }
});

// Show the button when scrolling down
window.addEventListener('scroll', function() {
  var btn = document.getElementById("go-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
});

document.getElementById("go-top-btn").addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});