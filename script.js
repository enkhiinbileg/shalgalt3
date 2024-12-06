// Select the form and listen for submit event
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const title = document.getElementById('title').value;
  const introduction = document.getElementById('introduction').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  // Validate inputs
  if (!title || !introduction || !price || !image) {
    alert('Please fill out all fields!');
    return;
  }

  // Create product object
  const product = { title, introduction, price, image };

  // Get existing products from localStorage
  const products = JSON.parse(localStorage.getItem('products')) || [];

  // Add new product to the array
  products.push(product);

  // Save updated products array back to localStorage
  localStorage.setItem('products', JSON.stringify(products));

  // Clear the form
  form.reset();

  alert('Product added successfully!');
});
cdn.tailwindcss.com