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

  // 전체 페이지 높이 확인
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total page height:', totalHeight);

  // 각 섹션의 실제 Y 위치 확인
  const sections = ['#intro','#roles','#revenue','#types','#cases','#assets','#synergy','#early-partner','#contact'];
  for (const sel of sections) {
    const y = await page.evaluate(s => {
      const el = document.querySelector(s);
      return el ? el.getBoundingClientRect().top + window.scrollY : -1;
    }, sel);
    console.log(sel, '->', y);
  }

  await browser.close();
})();
