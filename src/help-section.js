document.querySelector('.submit').addEventListener('click', () => {
    document.querySelectorAll('.field-input').forEach(input => {
      input.value = '';
    });
    alert('Thank you!');
});