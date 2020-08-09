var os = require('os');

//Variables
var trazabilidad = [];

async function getTableInfoByClassName(page,className,rowIni,skipEnd){
    var data = await page.evaluate("function a(){  var data = []; var table = document.getElementsByClassName('"+className+"')[0]; for(var i=0; i<table.rows.length; i++){  var row = table.rows[i];   var cols = [];   for(var j=0; j<row.cells.length; j++){     cols.push(row.cells[j].textContent.trim())   }        data.push(cols); } return data;  } a();");
    var data1 = [];
    for(var i=0; i<data.length; i++){
        if(i>=rowIni && i<(data.length-skipEnd)){
            data1.push(data[i])
        }
    }
    return data1;
}

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
    getTableInfoByClassName : getTableInfoByClassName,
    getTextElement : getTextElement,
    recargarPagina : recargarPagina,
    getTextXelement : getTextXelement,
    logError: logError,
    osDetails: osDetails,
    clearDataTrazabilidad: clearDataTrazabilidad,
    getTrazabilidad: getTrazabilidad,

}