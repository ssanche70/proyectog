const puppeteer = require('puppeteer');
const Functions  = require('./modulos/funcion');
var os = require('os');

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
  
  await page.goto('https://www.alkosto.com/');
  await page.type('#search', busqueda);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='searchSubmit']");
  const [btnBuscar] = await page.$x("//*[@id='searchSubmit']");
  await btnBuscar.click({clickCount: 1, delay: 100});
  await page.waitForXPath("//*[@id='salesperson_result']/div[1]/div[1]/div/select");
  const [selector] = await page.$x("//*[@id='salesperson_result']/div[1]/div[1]/div/select");
  await selector.click({clickCount: 1, delay: 100});
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press("Enter");
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='salesperson_result']/div[2]/ul/li[1]/h2/a");
  const [textName1] = await page.$x("//*[@id='salesperson_result']/div[2]/ul/li[1]/h2/a");
  var textEstado1 = await Functions.getTextXelement(page, textName1);
  console.log(textEstado1);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='salesperson_result']/div[2]/ul/li[2]/h2/a");
  const [textName2] = await page.$x("//*[@id='salesperson_result']/div[2]/ul/li[2]/h2/a");
  var textEstado2 = await Functions.getTextXelement(page, textName2);
  console.log(textEstado2);
  //flujoBot();

  debugger;
})();
