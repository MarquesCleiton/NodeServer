// carrega a biblioteca do Express na variável
var express = require("express");

// cria um servidor invocando a biblioteca
var server = express();
server.use(cors());

var listaDeAlunos;

listaDeFunc = [
    {
        "id": 1,
        "nome": "Cleiton",
        "email": "cleiton2210@gmail.com",
        "endereço": "rua agua molhada",
        "numero": 42
    },
    {
        "id": 2,
        "nome": "Matheus",
        "email": "Matheus@gmail.com",
        "endereço": "rua agua molhada",
        "numero": 43
    },
    {
        "id": 3,
        "nome": "Mayara",
        "email": "Mayara@gmail.com",
        "endereço": "rua agua molhada",
        "numero": 44
    },
    {
        "id": 4,
        "nome": "Italo",
        "email": "Italo@gmail.com",
        "endereço": "rua agua molhada",
        "numero": 45
    }];

server.get("/funcionarios/:id",function(req, res){
    var id = req.params.id;

    if(id < 1 || id > 4 ){
        res.json({"resultado": "funcionario não encontrado"})
    }else{
        res.json(listaDeFunc[id-1]);
    }
});

server.get("/funcionarios", function (req, res) {
    console.log("Browser acessou o caminho /hello")
    /*res.send("<marquee><h1>Hello world from express!!!</h1></marquee>")*/
    res.json(listaDeFunc);
});

server.listen(3000, function () {
    console.log("Servidor rodando na porta ,3000");
});