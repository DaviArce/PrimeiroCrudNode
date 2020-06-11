 const express = require('express');
 const crud = require('./routes/routes.js');
 const app = express();
 
 app.use(express.json());

 app.use('/',crud);

 const port = process.env.PORT ||3000
app.listen(port,()=>console.log(`Listening on ${port}....` ));