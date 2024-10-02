// Typing Effect for Subtitle
const prefixes = ["Software", "Backend", "Full-Stack", "Machine Learning"];
const suffix = "Engineer";
const finalPhrase = "House Slytherin";

const subtitleElement = document.getElementById('subtitle');
let currentPrefixIndex = 0;
let isDeleting = false;
let text = '';
let typingSpeed = 100;
let erasingSpeed = 50;
let newTextDelay = 2000; // Delay between changes

function typeSubtitle() {
  const currentPrefix = prefixes[currentPrefixIndex];
  const fullText = currentPrefixIndex < prefixes.length ? currentPrefix : finalPhrase;
  
  if (isDeleting) {
    text = fullText.substring(0, text.length - 1);
  } else {
    text = fullText.substring(0, text.length + 1);
  }
  
  if (currentPrefixIndex < prefixes.length) {
    subtitleElement.textContent = `${text} ${suffix}`;
  } else {
    subtitleElement.textContent = text;
  }

  if (!isDeleting && text === fullText) {
    isDeleting = true;
    typingSpeed = erasingSpeed;
    setTimeout(typeSubtitle, newTextDelay);
  } else if (isDeleting && text === '') {
    isDeleting = false;
    currentPrefixIndex++;
    if (currentPrefixIndex > prefixes.length) {
      currentPrefixIndex = 0; // Reset to start over
    }
    setTimeout(typeSubtitle, 500);
  } else {
    setTimeout(typeSubtitle, typingSpeed);
  }
}

// Timeline Functionality and AOS Initialization
document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize AOS
 /* AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once
  });*/

  // Typing effect
  typeSubtitle();

  // Book Interaction
  const book = document.querySelector('.book');
  const bookCover = document.querySelector('.book-cover');
  const pages = document.querySelectorAll('.page');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');
  let currentPage = 0;

  function showPage(pageIndex) {
    pages.forEach((page, index) => {
      if (index === pageIndex) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  book.addEventListener('click', () => {
    bookCover.style.transform = 'translateX(-100%)';
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Initialize the first page as active
  showPage(0);
});

// Optional: Contact Form Success Message
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Here you can add form submission logic (e.g., using Fetch API)
    
    // For now, we'll just display the success message
    successMessage.style.display = 'block';
    form.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });
});

// Magical Achievements Wall
document.addEventListener('DOMContentLoaded', function() {
  const scrolls = document.querySelectorAll('.achievement-scroll');
  
  scrolls.forEach(scroll => {
    scroll.addEventListener('touchstart', function() {
      this.style.height = '250px';
      this.querySelector('.achievement-details').style.opacity = '1';
    });
    
    scroll.addEventListener('touchend', function() {
      this.style.height = '150px';
      this.querySelector('.achievement-details').style.opacity = '0';
    });
  });
});
