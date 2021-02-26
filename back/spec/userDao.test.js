const { UserDAO } = require("../services/userDao")
const db = require('../models')
const { factory } = require('factory-girl')
const cleanDb = require("./helpers/cleanDb")

describe('User DAO test', () => {
    /** @type {UserDAO} */
    let userDao

    beforeAll(async () => {
        await cleanDb(db)
        userDao = new UserDAO()
    })

    test('Should find some users client', async () => {
        await factory.createMany('user', 5)
        const users = await userDao.getClientUsers('test@client.com')
        expect(users.length).toBeGreaterThan(0)
    })

    test('Should find some users employee', async () => {
        await factory.createMany('user', 5)
        const users = await userDao.getEmployeeUsers('test@employee.com')
        expect(users.length).toBeGreaterThan(0)
    })
})

afterAll(async () => {
    await cleanDb(db)
})