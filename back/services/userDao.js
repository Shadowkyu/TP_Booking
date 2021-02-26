require('../spec/factories/user').factory
const { factory } = require('factory-girl')
const db = require('../models')

module.exports.UserDAO = class UserDAO {
    async getClientUsers(email = "") {
        return await db.User.findAll({
            where: {
                isClient: true,
                email
            }
        }).map(x => x.dataValues)
    }

    async getEmployeeUsers(email = "") {
        return await db.User.findAll({
            where: {
                isClient: false,
                email
            }
        }).map(x => x.dataValues)
    }
}