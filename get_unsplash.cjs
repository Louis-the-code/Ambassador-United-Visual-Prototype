const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://unsplash.com/photos/photo-of-brown-church-_86u_Y0oAaM');
  const html = await page.content();
  console.log(html.substring(0, 20000));
  await browser.close();
})();
