const puppeteer = require('puppeteer')

const isDebug = true;
(async () => {
  var busqueda = 'bombillos';
  //Configuración browser inicial
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox'],
    slowMo: isDebug ? 100 : 5,
    defaultViewport: {
      width: 1200,
      height: 768
    }
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  
  await page.goto('https://www.exito.com/');
  await page.waitForXPath('//*[@id="header-container"]/div[2]/div[1]/div/div[3]/div/div/div/label/div/input', busqueda);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='header-container']/div[2]/div[1]/div/div[3]/div/div/div/label/div/span/div/button/svg");
  const [btnBuscar] = await page.$x("//*[@id='header-container']/div[2]/div[1]/div/div[3]/div/div/div/label/div/span/div/button/svg");
  await btnBuscar.click({clickCount: 1, delay: 100});
  //flujoBot();

  debugger;
})();
