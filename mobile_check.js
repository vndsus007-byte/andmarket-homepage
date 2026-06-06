const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15'
  });
  const page = await ctx.newPage();
  await page.goto('file:///C:/Users/banke/andmarket-homepage/index.html', { waitUntil: 'networkidle', timeout: 15000 }).catch(()=>{});
  await page.waitForTimeout(2000);

  const shots = [
    { name: '01-hero', y: 0 },
    { name: '02-hero-below', y: 700 },
    { name: '03-intro', y: 1500 },
    { name: '04-roles', y: 2400 },
    { name: '05-revenue', y: 3300 },
    { name: '06-types', y: 4200 },
    { name: '07-cases', y: 5100 },
    { name: '08-assets', y: 6000 },
    { name: '09-synergy', y: 6900 },
    { name: '10-early-partner', y: 7800 },
    { name: '11-contact', y: 8700 },
    { name: '12-footer', y: 9600 },
  ];

  const dir = 'C:/Users/banke/andmarket-homepage/doc/mobile-check';
  for (const s of shots) {
    await page.evaluate(y => window.scrollTo(0, y), s.y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${dir}/${s.name}.png` });
    console.log('captured:', s.name);
  }

  await browser.close();
  console.log('ALL DONE');
})();
