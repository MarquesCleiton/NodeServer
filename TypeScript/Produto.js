"use strict";
exports.__esModule = true;
/*
  codigo   : number
  nome     : string
  detalhes : string
  preco    : number
  estoque  : number
  linkFoto : string

*/
var Produto = /** @class */ (function () {
    function Produto(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (detalhes) {
        this.detalhes = detalhes;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (estoque) {
        this.estoque = estoque;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setLinkFoto = function (linkFoto) {
        this.linkFoto = linkFoto;
    };
    return Produto;
}());
exports.Produto = Produto;
