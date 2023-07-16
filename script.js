// No of passenger count +-
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const passengersInput = document.querySelector('#passengers');

minusBtn.addEventListener('click', () => {
  let currentValue = parseInt(passengersInput.value);
  if (currentValue > 1) {
    currentValue--;
    passengersInput.value = currentValue;
  }
});

plusBtn.addEventListener('click', () => {
  let currentValue = parseInt(passengersInput.value);
  currentValue++;
  passengersInput.value = currentValue;
});

// Drop Down
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const options = Array.from(dropdownContent.querySelectorAll('a'));
const dropdownText = document.querySelector('.dropdown-text');

options.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownText.textContent = option.textContent;
    dropdownContent.classList.remove('show');
  });
});

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!dropdownBtn.contains(targetElement) && !dropdownContent.contains(targetElement)) {
    dropdownContent.classList.remove('show');
  }
});


