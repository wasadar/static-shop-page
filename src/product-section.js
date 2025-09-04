document.querySelectorAll('.size-picker-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.size-picker-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
});
  
document.querySelectorAll('.color-image').forEach(color => {
    color.addEventListener('click', () => {
      document.querySelectorAll('.color-image').forEach(col => col.classList.remove('selected'));
      color.classList.add('selected');
  
      const colorId = color.id;
      const miniImages = document.querySelectorAll('.product-mini-image');
      miniImages.forEach((img, index) => {
        img.src = `imgs/product/${colorId}/image${index + 1}.png`;
        img.classList.remove('selected');
        if (index === 0) img.classList.add('selected');
      });
      document.querySelector('.main-product-image').src = `imgs/product/${colorId}/image1.png`;
    });
});
  
document.querySelectorAll('.product-mini-image').forEach(mini => {
    mini.addEventListener('click', () => {
      document.querySelectorAll('.product-mini-image').forEach(img => img.classList.remove('selected'));
      mini.classList.add('selected');
      document.querySelector('.main-product-image').src = mini.src;
    });
});