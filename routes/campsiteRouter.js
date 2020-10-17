const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router(); //create a router

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/') //like /get /post /put
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => { // /campsites/delete
    res.end('Deleting all campsites');
}); //chaining the messages

campsiteRouter.route('/:campsiteId') 
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => { // /campsites/:campsiteId/delete
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
}); //chaining the messages

module.exports = campsiteRouter;