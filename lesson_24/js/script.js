// Task 1
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle('active');
  });
});


//Task 2 
const bodyElement = document.body;

window.addEventListener('load', () => {
  bodyElement.classList.add('loaded');
});

//Task 3 

const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.addEventListener('mouseenter', () => {
  footer.classList.add('active');
});

header.addEventListener('mouseleave', () => {
  footer.classList.remove('active');
});

//Task 4 

const item = document.querySelector('.item4');

let started = false;

function startCounter() {
  if (started) return;
  started = true;

  const delay = Number(item.dataset.delay);
  const max = Number(item.dataset.max);

  let count = 1;
  item.textContent = count;

  const interval = setInterval(() => {
    count++;
    item.textContent = count;

    if (count >= max) {
      clearInterval(interval);
    }
  }, delay);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter();
    }
  });
});

observer.observe(item);
