"use strict";
exports.__esModule = true;
//export - possibilita que outros projetos possam ver a classe
var Carro = /** @class */ (function () {
    function Carro() {
        this.ligado = false;
    }
    Carro.prototype.andar = function () {
        if (this.ligado == true) {
            console.log("O carro da placa: " + this.placa + ", do modelo: " + this.modelo + ", do ano: " + this.ano + " ta andando");
        }
        else {
            console.log("O carro está desligado");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado == true) {
            console.log("O carro do ano " + this.ano + ", do modelo" + this.modelo + " do ano " + this.ano + " ta parando!");
        }
        else {
            console.log("O carro está desligado");
        }
    };
    Carro.prototype.ligar = function () {
        if (this.ligado == false) {
            this.ligado = true;
            console.log("Ligando...");
        }
        else {
            console.log("O carro já esta ligado!!!");
        }
    };
    Carro.prototype.desligar = function () {
        if (this.ligado == true) {
            console.log("Desligando...");
            this.ligado = false;
        }
        else {
            console.log("O carro já esta desligado!!!");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
