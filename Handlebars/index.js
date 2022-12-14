//Express
const express = require("express");
const app = express();
const PORT = 3001;

//Handlebars
let hbs = require("express-handlebars");
//App settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine('hbs', hbs.engine());
app.set("views", "./views/hbs");
app.set("view engine", "hbs");

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

//App Listen
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));