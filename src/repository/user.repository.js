const { Users } = require('../db');


async function registrationDB(users) {
    console.log('+')
    await Users.create(users);
    const data = await Users.find()
    return data
}

async function getUserByEmailDB(users) {
    const existUser = await Users.find({ email: users.email })
    return existUser
}


module.exports = { registrationDB, getUserByEmailDB }