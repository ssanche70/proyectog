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
    slowMo: isDebug ? 100 : 20,
    defaultViewport: {
      width: 1200,
      height: 768
    }
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  
  await page.goto('https://www.exito.com/');
  await page.waitFor(200);
  await page.type('#downshift-0-input', busqueda);
  await page.keyboard.press("Enter");
  await page.waitFor(200);
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div/div/button");
  const [opciones] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div/div/button");
  await opciones.click({clickCount: 1, delay: 100});
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div/div/div/button[5]");
  const [opciones1] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div/div/div/button[5]");
  var opcionesD = await Functions.getTextXelement(page, opciones1);
  await page.keyboard.press("Enter");
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[1]");
  const [textName1] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[1]");
  var textEstado1 = await Functions.getTextXelement(page, textName1);
  console.log(textEstado1);
  await page.waitFor(200);
  await page.waitForXPath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[2]");
  const [textName2] = await page.$x("/html/body/div[2]/div/div[1]/div/div[2]/div/div[10]/section/div[2]/div/div[4]/div/div[2]/div/div[2]/div[5]/div/div/div[2]/div[2]");
  var textEstado2 = await Functions.getTextXelement(page, textName2);
  console.log(textEstado2);
  //flujoBot();

  debugger;
})();
