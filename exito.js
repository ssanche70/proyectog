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
  
  await page.goto('https://www.exito.com/');
  await page.type('#downshift-0-input', busqueda);
  await page.keyboard.press("Enter");
  await page.waitFor(200);
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[9]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[1]/section/a/article/div/div[3]/div/span");
  const [textName1] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[9]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[1]/section/a/article/div/div[3]/div/span");
  var textEstado1 = await Functions.getTextXelement(page, textName1);
  console.log(textEstado1);
  await page.waitFor(200);
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[9]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[2]/section/a/article/div/div[3]/div/span");
  const [textName2] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[9]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[2]/section/a/article/div/div[3]/div/span");
  var textEstado2 = await Functions.getTextXelement(page, textName2);
  console.log(textEstado2);
  //flujoBot();

  debugger;
})();
