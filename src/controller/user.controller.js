const express = require('express');
const { registration } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse')
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await registration(req.body)
        console.log(data)
        buildResponse(res, data, 200)
    } catch (err) {
        buildResponse(res, err.message, 404)
    }
})

module.exports = route
