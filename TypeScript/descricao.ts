import teclado = require('readline-sync');
let titulo:string = teclado.question('Titulo?: ');
let descricao:string = teclado.question('descricao?: ');

/*
let html:string = "<html lang='pt-br'><head><title>.: MEU SITE :.</title></head><body><h1>"+titulo+"</h1><hr><p>"+desZcricao+"</p></body></html>";
*/

let html:string = `<html lang="pt-br"><head><title>.: MEU SITE :.</title></head><body><h1>${titulo}</h1><hr><p>${descricao}</p></body></html>;`


console.log(html);



