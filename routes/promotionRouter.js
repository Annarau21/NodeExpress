const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router(); //create a router

promotionRouter.use(bodyParser.json());

promotionRouter.route('/') //like /get /post /put
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => { 
    res.end('Deleting all promotions');
}); //chaining the messages

promotionRouter.route('/:promotionId') 
.all((req, res, next) => { //path already set, so just have the callback function
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.promotionId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => { 
    res.end(`Deleting campsite: ${req.params.promotionId}`);
}); //chaining the messages

module.exports = promotionRouter;