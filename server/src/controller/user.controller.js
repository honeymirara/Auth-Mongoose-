const express = require('express');
const { registration, authUser } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse')
const { generateToken } = require('../helper/jwt');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await registration(req.body)
        const token = generateToken(data[data.length - 1])
        res.cookie('Bearer', token)
        buildResponse(res, data, 200)
    } catch (err) {
        buildResponse(res, err.message, 404)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body)
        buildResponse(res, data, 200)
    } catch (err) {
        buildResponse(res, err.message, 404)
    }
})

module.exports = route
