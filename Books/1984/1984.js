
// File paths
const chapterFiles = {
  chapter1: 'chapter1.txt',
  chapter2: 'chapter2.txt',
};

let currentChapter = null; // Stores the current chapter content

let currentPage = 0; // Tracks the current page

let pages = []; // Stores the split pages of the current chapter

const wordsPerPage = 400; // Number of words per page

// Load a chapter from a file
function loadChapter(filePath) {
  fetch(filePath)
    .then((response) => response.text()) 
    .then((text) => {
      currentChapter = text;
      pages = splitIntoPages(currentChapter, wordsPerPage); // Split pages
      currentPage = 0;
      displayPage();
      
    })
    .catch((error) => console.error('Error loading chapter:', error));
}

// Split chapter  pages
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



//  loading chapters
document.getElementById('loadChapter1').addEventListener('click', () => {
  loadChapter(chapterFiles.chapter1);
});

document.getElementById('loadChapter2').addEventListener('click', () => {
  loadChapter(chapterFiles.chapter2);
});

//  navigation
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayPage();
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    displayPage();
  }
});
