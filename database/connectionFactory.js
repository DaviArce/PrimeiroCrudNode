// chamando a classe pra conexao
const mysql = require('mysql2'); 

try{
    const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'NodeTeste'
    });
    console.log('Api conectada ao banco');
    module.exports=conn;
    
    }
catch(err){
    console.log('Erro na conexão com o banco '+err);

    }
    


 
//Vai tenta se autenticar e tem o then e catch