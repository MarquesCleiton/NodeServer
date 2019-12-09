function criaDiv(... param:string[]){
    let html = "<html><head><title>.:Parametros:.</title></head><body>\n";
    for(let i = 0; i < param.length; i++){
        html += `<div id='${i+1}'>${param[i]}<div>\n`
    }
    html += "</body></html>"
    return html;
}

let html:string = criaDiv(" valor 1 ", " valor 2", " valor 3"," valor 4", " valor 5", " valor 6"," valor 7", " valor 8", " valor 9"," valor 10");
console.log(html);