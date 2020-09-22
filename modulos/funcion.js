var os = require('os');

//Variables
var trazabilidad = [];

async function getTextElement(page,element){
    return await page.evaluate("document.querySelector('"+element+"').textContent");
}

async function recargarPagina(page){
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
}
async function getTextXelement(page, element) {
    return await page.evaluate(element => element.textContent, element);
}

async function logError(err, code){
    console.error('Tenemos un error', code);
}

async function osDetails() {
    var networkInterfaces = os.networkInterfaces();
    console.log(networkInterfaces);
}

function getTrazabilidad (){
    return trazabilidad;
}


function clearDataTrazabilidad (){
    trazabilidad = [];
}

module.exports = {
    getTextElement : getTextElement,
    recargarPagina : recargarPagina,
    getTextXelement : getTextXelement,
    logError: logError,
    osDetails: osDetails,
    clearDataTrazabilidad: clearDataTrazabilidad,
    getTrazabilidad: getTrazabilidad,

}