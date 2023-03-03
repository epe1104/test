var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}


// Функция для изменения цвета фона при наведении на блок услуги
const serviceBlock = document.querySelector('.service-block');
serviceBlock.addEventListener('mouseenter', () => {
  serviceBlock.style.backgroundColor = '#e5e5e5';
});
serviceBlock.addEventListener('mouseleave', () => {
  serviceBlock.style.backgroundColor = '#f7f7f7';
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab');

function showTab(tabIndex) {
  tabContents.forEach((tab) => {
    tab.classList.remove('active');
  });
  tabButtons.forEach((tabButton) => {
    tabButton.classList.remove('active');
  });
  tabContents[tabIndex].classList.add('active');
  tabButtons[tabIndex].classList.add('active');
}

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', () => {
    showTab(index);
  });
});

// Пример скрипта для показа рекламных блоков через определенный промежуток времени
const adBlocks = document.querySelectorAll('.ad-block');

let currentIndex = 0;
const interval = setInterval(() => {
  adBlocks[currentIndex].style.display = 'none';
  currentIndex++;
  if (currentIndex >= adBlocks.length) {
    currentIndex = 0;
  }
  adBlocks[currentIndex].style.display = 'block';
}, 5000);

// получить модальное окно
var modal = document.getElementById("modal");

// получить кнопку, которая закрывает модальное окно
var closeBtn = document.getElementsByClassName("close")[0];

// когда пользователь кликает на кнопку, показать модальное окно
openBtn.onclick = function() {
  modal.style.display = "block";
}

// когда пользователь кликает на кнопку "закрыть", скрыть модальное окно
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// когда пользователь кликает за пределами модального окна, скрыть его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Открытие ссылки при нажатии на кнопку "Скачать"
const downloadButtons = document.querySelectorAll('.format-card button');
downloadButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://example.com/download-file');
  });
});



