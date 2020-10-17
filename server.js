const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000; // default 3000

const app = express(); //naming express as app -> to use/evoke express
app.use(morgan('dev')); // adding the 3rd party to express/app
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter); //route path & callback function
app.use('/promotions', promotionRouter); 
app.use('/partners', partnerRouter); 

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); //making sure things are connected with the server