const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
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
    { threshold: 0.4 } // Trigger when 40% of the section is visible
  );
  observer.observe(section);
});




const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.backgroundColor = '#ffd700';
progressBar.style.width = '0';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});


const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const content = document.querySelector('.book-content');

const chapterContent = document.getElementById('chapter-content');
const prevChapterButton = document.getElementById('prev-chapter');
const nextChapterButton = document.getElementById('next-chapter');

