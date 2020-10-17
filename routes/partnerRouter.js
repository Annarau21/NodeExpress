const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router(); //create a router

partnerRouter.use(bodyParser.json());

partnerRouter.route('/') //like /get /post /put
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => { // /partner/delete
    res.end('Deleting all partners');
}); //chaining the messages

partnerRouter.route('/:partnerId') 
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})
.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => { 
    res.end(`Deleting campsite: ${req.params.partnerId}`);
}); //chaining the messages

module.exports = partnerRouter;