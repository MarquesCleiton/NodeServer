fetch("http://localhots:3000/funcionarios",
{"method":"GET"}
.then(Response => Response.json)
.then(json => exibe(json)));


function exibe(json){
    for(i=0;i<json.lenth;i++){  
    }
}