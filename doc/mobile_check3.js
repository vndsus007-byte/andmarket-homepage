const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const page = await ctx.newPage();
  await page.goto('file:///C:/Users/banke/andmarket-homepage/index.html', { waitUntil: 'networkidle', timeout: 15000 }).catch(()=>{});
  await page.waitForTimeout(1500);

  const dir = 'C:/Users/banke/andmarket-homepage/doc/mobile-check';
  const shots = [
    { name: 'A-hero-top',         y: 0 },
    { name: 'B-hero-below',       y: 800 },
    { name: 'C-intro-top',        y: 1926 },
    { name: 'D-revenue',          y: 6006 },
    { name: 'E-cases',            y: 10135 },
    { name: 'F-early-partner',    y: 15685 },
    { name: 'G-early-partner2',   y: 16300 },
    { name: 'H-contact',          y: 17451 },
    { name: 'I-contact-form',     y: 18500 },
    { name: 'J-footer',           y: 19800 },
  ];

  for (const s of shots) {
    await page.evaluate(y => window.scrollTo(0, y), s.y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${dir}/${s.name}.png` });
    console.log('done:', s.name);
  }
  await browser.close();
})();
