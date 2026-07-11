const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/ko/brochure', { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // Additional wait just in case Next.js hydration takes a moment
    await new Promise(r => setTimeout(r, 5000));
    
    await page.pdf({ 
      path: 'public/Aethemar_Sales_Brochure_v6.pdf', 
      format: 'A4', 
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    await browser.close();
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
