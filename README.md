# Static shop page site.

This is the static homepage for Shopify School, built according to the provided Figma design. The project showcases my approach to front-end development using semantic HTML, vanilla CSS, and JavaScript with the Swiper library, while also allowing me to practice and enhance my skills.

## Features

- I used mostly vanilla CSS, HTML and JS with a Swiper as it was said in the task.
- I didn't made a fully different tablet and mobile CSS styles since they were similiar and the only main difference was one of the slider.
- Since I couldn't use `fetch` on github-actions I had to make a simple builder that would combine my html section into `index.html`.

## Installation

To run this application locally, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project folder.
3. Rename `dynamic-index.html` into `index.html`
4. Run a local server (personally I was using `php -S localhost:8000` for testing purposes).
5. Open your browser and go to the url of your server (in my case it was `http://localhost:8000`).

Alternatively on step 3 you can run `node build.js` if you have node.js installed locally so it would build fully static page for you (`dynamic-index.html` uses `fetch` to load different sections from different files). Alternative way was created mostly for deploying on github-actions.

## What I Would Improve with More Time

- First of all I would make a popup as I wasn't able to do it in the time.
- Second I would make some mobile layouts more accurate.
- Third I would make arrow for 2nd slider symmetrical (in the space).
- Fourth I would add dropdown to the header on mobile layout so the link would be still accessable.
- Fifth I would think more on the project and some sections structures.

## Deployment

The project is deployed on GitHub Pages. Visit the live version at: `https://wasadar.github.io/static-shop-page/`