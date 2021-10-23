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
app.get('/productDetail', function (req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

// Server
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));