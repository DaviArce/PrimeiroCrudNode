  //const Sequelize = require('sequelize');
  const conn = require ('../database/connectionFactory.js');

  //const conn = getConnection();

  


//   const Postagem = conn.define('postagem',{
//     titulo:{
//         type: Sequelize.INTEGER
//     },
//     conteudo:{
//         type: Sequelize.TEXT
//     }
//     }
//     )
//     //insert into
//     // Postagem.create({
//     //     titulo:1,
//     //     conteudo:'dlfksdokflsdkfolsdf'


//     // });
// const user = conn.define('user',{
//     nome:{
//         type:Sequelize.STRING
//     },
//     sobrenome:{
//         type:Sequelize.STRING
//     },
//     idade:{
//         type:Sequelize.INTEGER
//     },
//     email:{
//         type:Sequelize.STRING
//     }
// })

// user.create({
//     nome:'Vai toma no cu',
//     sobrenome:'Palmeiras',
//     idade:51,
//     email:'juninhogameplay@gmail.com'

// })
//    // Postagem.sync({force:true});
//     //user.sync({force:true});