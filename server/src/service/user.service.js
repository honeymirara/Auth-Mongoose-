const { registrationDB, getUserByEmailDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const salt = 11;

async function registration(users) {
    const foundUser = await getUserByEmailDB(users)
    if (foundUser.length) throw new Error('this user already exists');
    const hashPassword = await bcrypt.hash(users.password, salt)

    const data = await registrationDB({ ...users, password: hashPassword });
    if (!data.length) throw new Error('user is not created')
    return data
}

async function authUser(users) {
    const findUser = await getUserByEmailDB(users)
    if (!findUser.length) throw new Error('this email is not found')
    if (!(await bcrypt.compare(users.password, findUser[0].password))) throw new Error('password is wrong')
    return findUser
}




module.exports = { registration, authUser }