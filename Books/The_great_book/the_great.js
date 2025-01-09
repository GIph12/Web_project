let currentChapter = 1; // Start with Chapter 1

// Function to load a chapter
const loadChapter = (chapterNumber) => {
  fetch(`/Books/the_great_book/chapter${chapterNumber}.txt`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Chapter not found');
      }
      return response.text();
    })
    .then(text => {
      chapterContent.textContent = text;
      updateNavigationButtons(chapterNumber);
    })
    .catch(error => {
      console.error('Error loading chapter:', error);
      chapterContent.textContent = 'Chapter not found.';
    });
};

// Function to update navigation buttons
const updateNavigationButtons = (chapterNumber) => {
  if (chapterNumber === 1) {
    prevChapterButton.disabled = true;
  } else {
    prevChapterButton.disabled = false;
  }

  // Check if the next chapter exists
  fetch(`/Books/the_great_book/chapter${chapterNumber + 1}.txt`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Next chapter not found');
      }
      nextChapterButton.disabled = false;
    })
    .catch(() => {
      nextChapterButton.disabled = true;
    });
};

// Event listeners for navigation
prevChapterButton.addEventListener('click', () => {
  if (currentChapter > 1) {
    currentChapter--;
    loadChapter(currentChapter);
  }
});

nextChapterButton.addEventListener('click', () => {
  currentChapter++;
  loadChapter(currentChapter);
});

// Load the first chapter
loadChapter(currentChapter);

// In your JavaScript file or <script> section
// Show the button when scrolling down
window.addEventListener('scroll', function() {
  var btn = document.getElementById("go-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
document.getElementById("go-top-btn").addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});