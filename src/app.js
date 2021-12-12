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
let usersRouter = require('./routes/usersRouter');
let productsRouter = require('./routes/productsRouter');
let adminRouter = require('./routes/adminRouter');
let sinLogRouter = require('./routes/sinLogRouter.js');

    /* Routes */
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/admin', adminRouter)
app.use('/sinLog', sinLogRouter)

    /* Server  */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));

