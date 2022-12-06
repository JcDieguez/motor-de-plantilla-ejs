const express = require("express");
const app = express();
const PORT = 3000;

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//view engine

app.set("views", "./views/ejs");
app.set("view engine", "ejs");


let productos = [];

app.get('/', (req, res, next) => {
    res.render('index', {productos})
});
app.post('/productos', (req, res, next) => {
    productos.push(req.body);
    res.redirect('/');
});
app.get('/productos', (req, res, next) => {
    res.render('productos', {productos})
});


app.listen(PORT);