function verificaAno(ano) {
    if (ano % 4 == 0 && ano % 100 != 0) {
        console.log("O ano " + ano + " \u00E9 bixesto");
    }
    else {
        console.log("O ano " + ano + " NAO eh bixesto");
    }
}
verificaAno(2016);
