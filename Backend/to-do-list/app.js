const express = require('express');
const checkListRouter = require('./src/routes/checklist')
const app = express();
require('./config/database');

app.use(express.json());

app.use('/checklists',checkListRouter);

app.listen(3000,()=>{
    console.log('Servidor iniciado')
});
