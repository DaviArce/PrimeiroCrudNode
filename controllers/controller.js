const conn = require('../database/connectionFactory.js');

module.exports = {
    async ver (req,res){
        try{
                conn.execute('SELECT * FROM usuarios',
                function(err,result,field){
                    if(err == null){
                        const valor = JSON.stringify(err);
                        res.status(404,'Valor não encontrado '+valor);
                    }
                    const resultado = JSON.stringify(result);
                    res.send(resultado);
    
                });
        }
        catch(err){
            res.status(404,'Deu erro '+err);
    
        }
    },
    async verCadastro (req,res){
        const id = req.params.id;
        console.log(id);
        try{
            conn.execute(`SELECT * FROM usuarios Where nome = ${id}`,
                function(err,result,field){
                    
                    if(err != null){
                        //res.status(400,"Deu erro");
                        let sda = JSON.stringify(err);
                        res.send(sda);
                            
                     }
                    let a = JSON.stringify(result); 
                        res.send(a);
                    
                }
            );
            
        }
        catch(err){
            res.status(404,'Erro ao conectar-se ao banco');
        }
    },
    async delete (req,res){
        const id = req.params.id;
        try{     
            conn.execute(`SELECT * FROM usuarios Where nome = ${id}`,
            function(err,result,field){
                if(err != null){
                    res.status(400,"Deu erro");
                    res.send('Deu erro viado');    
                 }
                 conn.execute(`delete from usuarios WHERE nome = ${id}`,
                 function(err,result){
                     if(!err==null){
                         res.send("Deu um erro ");
                     }
                     res.send('Deletado com sucesso');
                 }
                 );
            }
        ); 
        }
        catch(err){
            res.status(400).send('Não foi possível conectar ao BD');
        }
    },
    async cadastrar (req,res){
        const {email,idade,descricao} = req.body;
         
        
        // const idade = req.body.idade;
        // const descricao = req.body.descricao;
        let id = Math.floor(Math.random()*100);
        
        console.log(email,idade,descricao,id);

        try{
            conn.execute(`insert into usuarios (nome,email,idade,descricao) values ('${id}','${email}','${idade}','${descricao}')`,
            function(err,result,field){
    
                if(err != null){
                const valor = JSON.stringify(err);
                res.status(400,'Valor não encontrado '+valor);
                }
                res.send("Usuario criado com sucesso");
                
                
    
            });
    }
    catch(err){
        res.status(404,'Deu erro '+err);
    
    }
        
    },
    async atualizar (req,res){
        const id = req.params.id;
        const {email,idade,descricao} = req.body;
        try{     
            conn.execute(`SELECT * FROM usuarios Where nome = ${id}`,
            function(err,result,field){
                if(err != null){
                    res.status(400,"Deu erro");
                    res.send('Deu erro viado');    
                 }
                 
                 conn.execute(`UPDATE usuarios SET email = '${email}', idade='${idade}',descricao='${descricao}' WHERE nome = ${id}`,
                 function(err,result){
                     if(err!=null){
                         res.send("Deu um erro ");
                     }
                     res.send('Atualizado com sucesso');
                 }
                 );
            }
        ); 
        }
        catch(err){
            res.status(400).send('Não foi possível conectar ao BD');
        }
    
    }
}