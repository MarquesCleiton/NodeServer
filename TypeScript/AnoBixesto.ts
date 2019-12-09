function verificaAno(ano: number): void {
    if (ano % 400) {
        console.log(`O ano ${ano} é bixesto`);
    } else if(ano%4 == 0 && ano%100!=0){
        console.log(`O ano ${ano} é bixesto`);
    }else{
        console.log(`O ano ${ano} não é bixesto`);
    }
}

verificaAno(2016);