//Total price product 
const quantityBtnMinus = document.querySelector('.quantity-btn-minus');
const quantitySelect = document.querySelector('.quantity-select');
const quantityBtnPlus = document.querySelector('.quantity-btn-plus');
const cartProductPrice = document.querySelector('.cart-product-price');
const totalPrice = document.querySelector('.text-right');

// Lấy giá tiền của sp
const productPrice = parseFloat(cartProductPrice.textContent.replace('₫', ''));

// Xử lý sự kiện click trên nút tăng/giảm
quantityBtnMinus.addEventListener('click', () => {
  let quantity = parseInt(quantitySelect.value);
  if (quantity > 1) {
    quantity--;
    quantitySelect.value = quantity;
    updateTotalPrice(quantity, productPrice);
  }
});

quantityBtnPlus.addEventListener('click', () => {
  let quantity = parseInt(quantitySelect.value);
  quantity++;
  quantitySelect.value = quantity;
  updateTotalPrice(quantity, productPrice);
});

// Cập nhật giá tiền sản phẩm
function updateTotalPrice(quantity, productPrice) {
  const newTotalPrice = quantity * productPrice * 1000;
  totalPrice.textContent = `${newTotalPrice.toLocaleString()}₫`;
}


//Tăng/giảm số lượng sản phẩm Page Detail
// Get the necessary elements
const quantityInput = document.querySelector('.btn-select');
const minusBtn = document.querySelector('.btn-minus');
const plusBtn = document.querySelector('.btn-plus');

// Set the initial value to 1
quantityInput.value = 1;

// Add event listeners to the buttons
minusBtn.addEventListener('click', decreaseQuantity);
plusBtn.addEventListener('click', increaseQuantity);

// Functions to handle the quantity changes
function decreaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}


