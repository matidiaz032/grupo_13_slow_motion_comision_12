const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
const methodOverride = require('method-override');
const session = require('express-session'); // Express-session Module
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');
const PORT = 3000;
const auth_adminCheck = require('./middlewares/auth_adminCheck.js');

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// configuration express-sessions
app.use(session({
    secret: 'gfdtrdthfhjgbhjkghkjgj165498465',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(cookieSession);

    /* Enrutadores */
let indexRouter = require('./routes/indexRouter');
let usersRouter = require('./routes/usersRouter');
let productsRouter = require('./routes/productsRouter');
let adminRouter = require('./routes/adminRouter');
let notFoundRouter = require('./routes/notFoundRouter');
let cartRouter = require('./routes/cartRouter')

    /* Routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', auth_adminCheck, adminRouter);
app.use('/cart', cartRouter)
app.use('*', notFoundRouter);



        // Sincronisa la base de datos con express //
/* const { db } = require('./database/models/index.js')     //Requiere la coneccion de SQL
db.sync({force: false }).then(() => {                      //Sincronisa la base de datos
    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}  
    http://localhost:${PORT}`));                            //Conecta sequelize con App
}).catch((error) => console.log('no se conecto')) */


/* Server  */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));