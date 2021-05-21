const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const morgan = require('morgan');
const exphbs = require('express-handlebars');

//Load Configuration
dotenv.config({ path: './config/config.env'})

//Connect DataBase
connectDB();

const app = express();
//Logging
if(process.env.NODE_ENV === 'developement'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs',exphbs({ extname: "hbs",
defaultLayout: "",
layoutsDir: "",}))
app.set('view engine','.hbs')

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running`));