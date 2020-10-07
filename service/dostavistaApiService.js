const fetch = require('node-fetch');
const config = require('../config');
const logs = require('../utils/logs');
const calculateOrderBody = require('./data/calculateOrderTestData');
const createOrderBody = require('./data/createOrderTestData');
const editOrderBody = require('./data/editOrderTestData');


function test() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1";
    return doGet(url);
}

function getOrders() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1/orders";
    return doGet(url);
}

function calculateOrder() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1/calculate-order";
    return doPost(url, calculateOrderBody);
}

function createOrder() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1/create-order";
    return doPost(url, createOrderBody);
}

function editOrder() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1/edit-order";
    return doPost(url, editOrderBody);
}

function cancelOrder() {
    const url = "https://robotapitest.dostavista.ru/api/business/1.1/cancel-order";
    return doPost(url, editOrderBody);
}

function doPost(url, body) {
    const headers = {
        "X-DV-Auth-Token": config.dostavistaApiKey
    };
    const options = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body)
    };
    return new Promise(resolve => {
        fetch(url, options).then(res => res.json()).then(data => {
            resolve(data);
        }, err => {
            logs.log("error in POST response: " + err);
            resolve({error: "error in POST response: " + err});
        })
    });
}

function doGet(url) {
    const headers = {
        "X-DV-Auth-Token": config.dostavistaApiKey
    };
    const options = {
        headers: headers,
        method: "GET"
    };
    return new Promise(resolve => {
        fetch(url, options).then(res => res.json()).then(data => {
            resolve(data);
        }, err => {
            logs.log("Test url response error: " + err);
            resolve(false);
        })
    });
}


module.exports = {
    test,
    getOrders,
    calculateOrder,
    createOrder,
    editOrder,
    cancelOrder
};