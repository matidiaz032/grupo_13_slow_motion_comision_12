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
let detailRouter = require('./routes/detailRouter.js')
let adminRouter = require('./routes/adminRouter')
let adminMovieRouter = require('./routes/adminMovieRouter')
let adminSeriesRouter = require('./routes/adminSeriesRouter')
let usersDataRouter = require('./routes/usersDataRouter')

    /* Routes */
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/series', seriesRouter)
app.use('/movies', moviesRouter)
app.use('/cart', cartRouter)
app.use('/detail', detailRouter)
app.use('/admin', adminRouter)
app.use('/adminmovie', adminMovieRouter)
app.use('/adminseries', adminSeriesRouter)
app.use('/users', usersDataRouter)
    /* Server */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));