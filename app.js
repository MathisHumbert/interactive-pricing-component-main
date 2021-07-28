// select element
const container = document.querySelector('.toggle-container');
const priceInput = document.querySelector('.price-input');
const price = document.querySelector('.price-change');
const discount = document.querySelector('.discount');
const year = document.querySelector('.year');
const pageviews = document.querySelector('.pageviews');

// window loading
window.addEventListener('DOMContentLoaded', () => {
  price.textContent = `$16.00`;
  pageviews.textContent = `100k pageviews`;
});

// button discount
let value = priceInput.value;
container.addEventListener('click', (e) => {
  container.classList.toggle('on');
  if (container.classList.contains('on')) {
    value = Math.ceil(value * 0.75);
  } else {
    value = priceInput.value;
  }
  price.textContent = `$${value}.00`;
});

// input scroll value
priceInput.addEventListener('input', () => {
  value = priceInput.value;
  let pageviewsValue = 1;
  pageviewsValue = Math.ceil(value * 6.25);
  pageviews.textContent = `${pageviewsValue}k pageviews`;
  if (container.classList.contains('on')) {
    value = Math.ceil(value * 0.75);
  } else {
    value = priceInput.value;
  }
  price.textContent = `$${value}.00`;
});

// input style
priceInput.addEventListener('mousemove', () => {
  let x = priceInput.value;
  let color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${
    x * 3
  }%, hsl(224, 65%, 95%) ${x}%)`;
  priceInput.style.background = color;
});
