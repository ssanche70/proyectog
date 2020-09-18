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
  
  await page.goto('https://www.tiendasjumbo.co/');
  await page.waitFor(31000);
  await page.type('#nm-custom-autocomplete', busqueda);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='header']/div/div[2]/div[2]/div[1]/div[1]/label");
  const [btnBuscar] = await page.$x("//*[@id='header']/div/div[2]/div[2]/div[1]/div[1]/label");
  await btnBuscar.click({clickCount: 1, delay: 100});
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='search-results-page']/div[28]/div/div/div[8]/div[2]");
  const [textName1] = await page.$x("//*[@id='search-results-page']/div[28]/div/div/div[8]/div[2]");
  var textEstado1 = await Functions.getTextXelement(page, textName1);
  //console.log(textEstado1);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='search-results-page']/div[28]/div/div/div[8]/div[2]");
  const [textName2] = await page.$x("//*[@id='search-results-page']/div[28]/div/div/div[8]/div[2]");
  var textEstado2 = await Functions.getTextXelement(page, textName2);
  //console.log(textEstado2);
  await page.waitFor(200);
  const [btnDesplegar] = await page.$x("//*[@id='search-results-page']/div[28]/div/div/div[8]/div[2]/div[2]/div[2]/select");
  await btnDesplegar.click({clickCount: 1, delay: 100});
  await page.waitFor(200);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press("Enter");
  //await page.select('select# ', 'Menor precio');//no selecciona
  await page.waitFor(200);
  
  //flujoBot();

  debugger;
})();
