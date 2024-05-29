const btnSizes = document.querySelectorAll('.select-size');

btnSizes.forEach(btn => {
  // Thêm sự kiện click cho mỗi nút
  btn.addEventListener('click', () => {
    // Lấy kích cỡ từ class của nút
    const size = btn.classList.contains('size-S') ? 'S' : 'M';

    // Loại bỏ class 'active' từ tất cả các nút
    btnSizes.forEach(b => {
      b.classList.remove('active');
      b.style.backgroundColor = ''; // Reset màu nền
      b.style.color = ''; // Reset màu chữ
    });

    // Thêm class 'active' cho nút được click
    btn.classList.add('active');

    // Thay đổi màu nền và màu chữ cho nút được click
    btn.style.backgroundColor = '#000';
    btn.style.color = '#fff';

    // Thay đổi các thuộc tính tương ứng với kích cỡ được chọn
    updateProductSize(size);
  });
});

// Hàm cập nhật các thuộc tính liên quan đến kích cỡ
function updateProductSize(size) {
  // Tìm các phần tử liên quan đến kích cỡ
  const sizeElement = document.querySelector(`.select-size.size-${size}`);
  const input = sizeElement.querySelector('input');
  const label = sizeElement.querySelector('label');

  // Cập nhật các thuộc tính tương ứng
  input.checked = true;
  label.classList.add('active');
}