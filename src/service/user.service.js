const { registrationDB, getUserByEmailDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const salt = 11;

async function registration(users) {
    const foundUser = await getUserByEmailDB(users.email)
    if (foundUser.length) throw new Error('his user already exists');
    const hashPassword = await bcrypt.hash(users.password, salt)

    const data = await registrationDB({...users, password: hashPassword});
    if (!data.length) throw new Error('user is not created')
    return data
}




module.exports = { registration }