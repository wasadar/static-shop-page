const fs = require('fs').promises;

async function buildIndex() {
  const sections = [
    'header',
    'hero-section',
    'collection-section',
    'faq-section',
    'product-section',
    'help-section',
    'footer',
  ];

  let indexContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopify School Homepage</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/hero-section.css">
    <link rel="stylesheet" href="styles/collection-section.css">
    <link rel="stylesheet" href="styles/faq-section.css">
    <link rel="stylesheet" href="styles/product-section.css">
    <link rel="stylesheet" href="styles/help-section.css">
    <link rel="stylesheet" href="styles/footer.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  </head>
  <body>
  `;

  for (const section of sections) {
    const html = await fs.readFile(`html/${section}.html`, 'utf-8');
    indexContent += `<div id="${section}">${html}</div>\n`;
  }

  indexContent += `
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="src/header.js" defer></script>
    <script src="src/faq-section.js" defer></script>
    <script src="src/hero-section.js" defer></script>
    <script src="src/collection-section.js" defer></script>
    <script src="src/product-section.js" defer></script>
    <script src="src/help-section.js" defer></script>
    <script src="src/footer.js" defer></script>
  </body>
  </html>
  `;

  await fs.writeFile('index.html', indexContent);
  console.log('Index.html built successfully!');
}

buildIndex().catch(err => console.error(err));