const express = require('express');
const app = express();
require('./models')
const userCtrl = require('./controllers/userController.js');

const port = 8080;

app.get("/", (res, req)=>{
    req.send("Home Page");
})

// app.get("/add", userCtrl.addUser);
app.get('/crudOP', userCtrl.crud);
app.get('/raw-query', userCtrl.rawQuery);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})