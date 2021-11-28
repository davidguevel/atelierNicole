const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = require('./app/router');


const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', ('./views'));


app.use(express.static('./public'));
app.use(router);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
