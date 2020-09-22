async function domStatusComplete(page){
    while(true){
        var status = await page.evaluate("document.readyState");
        console.log(status);
        if(status == 'complete'){
            return true;
        }
        return false;
    }
}

module.exports = {
    domStatusComplete :domStatusComplete
}