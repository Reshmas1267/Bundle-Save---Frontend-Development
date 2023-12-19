

const boxes = document.querySelectorAll('.box');
const sizeDropdown = document.getElementById('sizeDropdown');
const colorDropdown = document.getElementById('colorDropdown');
const totalDisplay = document.getElementById('total');
const addToCartBtn = document.getElementById('addToCart');
let totalAmount = 0;

boxes.forEach(box => {
  box.addEventListener('click', function() {
  this.classList.toggle('expanded');
  if (this.classList.contains('expanded')) {
      if (this.id === 'box2') {
        sizeDropdown.style.display = 'block';
        colorDropdown.style.display = 'block';
      } else {
        sizeDropdown.style.display = 'none';
        colorDropdown.style.display = 'none';
      }
    } else {
      sizeDropdown.style.display = 'none';
      colorDropdown.style.display = 'none';
    }
  });
});

sizeDropdown.addEventListener('change', function() {
 const selectedSize = this.value;
});

colorDropdown.addEventListener('change', function() {
  const selectedColor = this.value;
  });

addToCartBtn.addEventListener('click', function() {
  totalAmount = calculateTotal(); 
  totalDisplay.textContent = `Total: DKK ${totalAmount.toFixed(2)}`;
});

