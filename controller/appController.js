const thirdApiService = require('../service/dostavistaApiService');


function test(req, res) {
    thirdApiService.test().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}

function getOrders(req, res) {
    thirdApiService.getOrders().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}

function calculateOrder(req, res) {
    thirdApiService.calculateOrder().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}

function createOrder(req, res) {
    thirdApiService.createOrder().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}

function editOrder(req, res) {
    thirdApiService.editOrder().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}

function cancelOrder(req, res) {
    thirdApiService.cancelOrder().then(data => {
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(500);
        res.json({error: "internal third API\'s connection error"});
    });
}


module.exports = function(app) {
    app.get('/test', test);
    app.get('/test/getOrders', getOrders);
    app.get('/test/calculateOrder', calculateOrder);
    app.get('/test/createOrder', createOrder);
    app.get('/test/editOrder', editOrder);
    app.get('/test/cancelOrder', cancelOrder);
};