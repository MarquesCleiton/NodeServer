function criaDiv() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var html = "<html><head><title>.:Parametros:.</title></head><body>\n";
    for (var i = 0; i < param.length; i++) {
        html += "<div id='" + i + "'>" + param[i] + "<div>\n";
    }
    html += "</body></html>";
    return html;
}
var html = criaDiv("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");
console.log(html);
