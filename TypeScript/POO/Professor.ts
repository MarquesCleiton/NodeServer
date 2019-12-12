import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
    private valorHora: number;
    private numHora: number;
    private areaFormacao: string;

    public getValorhora(): number {
        return this.valorHora;
    }

    public setValorHora(valorhora: number): void {
        this.valorHora = valorhora;
    }

    public getNumHora(): number {
        return this.numHora;
    }

    public setNumHora(numHora: number): void {
        this.numHora = numHora;
    }

    public getAreaFormacao(): string {
        return this.areaFormacao;
    }

    public setAreaFormacao(areaFormacao: string): void {
        this.areaFormacao = areaFormacao;
    }
}