const jwt = require('jsonwebtoken');


function generateToken(data){
    const token = jwt.sign(JSON.stringify(data), 'secret')
    return token
}

module.exports = {generateToken}