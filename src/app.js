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
const auth_users = require('./middlewares/auth_users.js');

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
let sinLogRouter = require('./routes/sinLogRouter.js');

    /* Routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', auth_users, productsRouter);
app.use('/admin', auth_adminCheck, adminRouter);
app.use('/sinLog', sinLogRouter);

    /* Server  */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));