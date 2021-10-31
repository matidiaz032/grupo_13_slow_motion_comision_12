let express = require('express');
let app = express();
const PORT = 3000;
let path = require('path');

// Middlewares
app.use(express.static("public"));

// Routes
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/index.html'))
});
app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'));
});
app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, './views/register.html'))
});
app.get('/productDetail', function (req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});
app.get('/productCart', function (req, res){
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});
app.get('/indexMovies', function (req, res){
    res.sendFile(path.join(__dirname, './views/indexMovies.html'));
});
app.get('/indexSeries', function (req, res){
    res.sendFile(path.join(__dirname, './views/indexSeries.html'));
});
// Server
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));