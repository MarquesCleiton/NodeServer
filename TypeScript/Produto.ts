import { StringDecoder } from "string_decoder";

/*
  codigo   : number
  nome     : string
  detalhes : string
  preco    : number
  estoque  : number
  linkFoto : string

*/

export class Produto {
    private codigo: number;
    private nome: string;
    private detalhes: string;
    private preco: number;
    private estoque: number;
    private linkFoto: string;

    public constructor(_co: number, _no: string, _de: string, _pr: number, _es: number, _li: string) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }

    public getCodigo(): number {
        return this.codigo;
    }
    public setCodigo(_co: number): void {
        this.codigo = _co;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDetalhes(): string {
        return this.detalhes;
    }

    public setDetalhes(detalhes: string) {
        this.detalhes = detalhes;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public getEstoque(): number {
        return this.estoque;
    }

    public setEstoque(estoque: number): void {
        this.estoque = estoque;
    }

    public getLinkFoto(): string {
        return this.linkFoto;
    }

    public setLinkFoto(linkFoto: string): void {
        this.linkFoto = linkFoto;
    }
}