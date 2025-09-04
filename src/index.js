fetch('../html/header.html')
  .then(response => response.text())
  .then(html => document.getElementById('header').innerHTML = html);
fetch('../html/hero-section.html')
  .then(response => response.text())
  .then(html => document.getElementById('hero').innerHTML = html);
  fetch('../html/collection-section.html')
  .then(response => response.text())
  .then(html => document.getElementById('collection').innerHTML = html);
fetch('../html/faq-section.html')
  .then(response => response.text())
  .then(html => document.getElementById('faq').innerHTML = html);
fetch('../html/product-section.html')
  .then(response => response.text())
  .then(html => document.getElementById('product').innerHTML = html);
fetch('../html/help-section.html')
  .then(response => response.text())
  .then(html => document.getElementById('help').innerHTML = html);
fetch('../html/footer.html')
  .then(response => response.text())
  .then(html => document.getElementById('footer').innerHTML = html);

const scripts = ['header.js', 'faq-section.js', 'hero-section.js', 'collection-section.js', 'product-section.js', 'help-section.js', 'footer.js'];
scripts.forEach(file => {
  const script = document.createElement('script');
  script.src = `../src/${file}`;
  document.body.appendChild(script);
});