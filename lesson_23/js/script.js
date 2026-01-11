//Task 1
const bodyElement = document.body;

//Task 2
function createList(itemsCount = 3) {
  const ul = document.createElement('ul');

  for (let i = 1; i <= itemsCount; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
  }

  bodyElement.appendChild(ul);
}
createList();  
createList(5); 

//Task 3 
bodyElement.classList.add('loaded');

if (document.body.classList.contains('loaded')) {
  document.body.style.color = 'green';
}

//Task 4 
let items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.classList.add('active');
  item.textContent = `Item No.${index + 1}`;
});


//Task 5
let button = document.querySelector('.button');

button.scrollIntoView({
  behavior: 'smooth'
});

//Task 6
const link = document.querySelector('.link');

link.dataset.value = 100;

const dataValue = Number(link.dataset.value);

if (dataValue < 200) {
  link.style.color = 'red';
}

