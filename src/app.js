let express = require('express');
let app = express();
const PORT = 3000;
let path = require('path');

// Middlewares
app.use(express.static("public"));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


    /* Enrutadores */
let indexRouter = require('./routes/indexRouter');
let loginRouter = require('./routes/loginRouter.js')
let registerRouter = require('./routes/registerRouter.js')
let seriesRouter = require('./routes/seriesRouter.js')
let moviesRouter = require('./routes/moviesRouter.js')
let cartRouter = require('./routes/cartRouter.js')



    /* Routes */
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/series', seriesRouter)
app.use('/movies', moviesRouter)
app.use('/cart', cartRouter)




/* app.get('/register', function (req, res){
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
}); */


    /* Server */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));