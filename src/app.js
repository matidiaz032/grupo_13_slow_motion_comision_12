let express = require('express');
let app = express();
let path = require('path');
const methodOverride = require('method-override');
const PORT = 3000;

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

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
let profileRouter = require('./routes/profileRouter')
let sinLogRouter = require('./routes/sinLogRouter.js')

    /* Routes */
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/series', seriesRouter)
app.use('/movies', moviesRouter)
app.use('/cart', cartRouter)
app.use('/detail', detailRouter)
app.use('/admin', adminRouter)
app.use('/profile', profileRouter)
app.use('/sinLog', sinLogRouter)

    /* Server */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));