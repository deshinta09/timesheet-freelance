const bcrypt = require('bcryptjs')
const secret = process.env.secret

const hashPassword = (password) => bcrypt.hashSync(password,secret)
const comparePassword = (password,hashedPassword) => bcrypt.compareSync(password,hashedPassword)

module.exports = { hashPassword,comparePassword }