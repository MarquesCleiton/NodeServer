"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo = teclado.question('Titulo?: ');
var descricao = teclado.question('descricao?: ');
/*
let html:string = "<html lang='pt-br'><head><title>.: MEU SITE :.</title></head><body><h1>"+titulo+"</h1><hr><p>"+descricao+"</p></body></html>";
*/
var html = "<html lang=\"pt-br\"><head><title>.: MEU SITE :.</title></head><body><h1>" + titulo + "</h1><hr><p>" + descricao + "</p></body></html>;";
console.log(html);
