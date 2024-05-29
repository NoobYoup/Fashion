const productList = document.querySelector('.row');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPage = 1;
const itemsPerPage = 4; // Số sản phẩm hiển thị trên mỗi trang

// Render danh sách sản phẩm
function renderProducts(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const products = productList.children;

  productList.innerHTML = '';
  for (let i = startIndex; i < endIndex && i < products.length; i++) {
    productList.appendChild(products[i].cloneNode(true));
  }
}

// Xử lý sự kiện click nút next
nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(productList.children.length / itemsPerPage)) {
    currentPage++;
    renderProducts(currentPage);
  }
});

// Xử lý sự kiện click nút prev
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage);
  }
});

// Render danh sách sản phẩm lần đầu
renderProducts(currentPage);