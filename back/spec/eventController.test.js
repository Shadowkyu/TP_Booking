const { EventConverter } = require("../services/EventConverter")
const db = require('../models')
const { factory } = require('factory-girl')
const cleanDb = require("./helpers/cleanDb")
const { UserDAO } = require("../services/userDao")

describe('About EventConvert', () => {
    /** @type {EventConverter} */
    let eventConverter
    /** @type {UserDAO} */
    let userDao

    beforeAll(() => {
        const payload = {
            attendees: [
                {
                    displayName: 'Nick Stock',
                    email: "test1@client.com",
                    organizer: true,
                    response_status: 'accepted'
                },
                {
                    displayName: 'Nicholas Stock',
                    email: 'test2@employee.com',
                    response_status: 'accepted',
                    self: true
                }
            ],
            end: '2018-03-05T18:30:00.000+01:00',
            html_link: 'https://www.google.com/calendar/event?eid=MGptdjJ1ZDljMWo3Y2kyZzFqZ21ybWY2c3Mgbmlja0BnZW1iYW5pLmNvbQ',
            id: '0jmv2ud9c1j7ci2g1jgmrmf6ss',
            start: '2018-03-05T12:30:00.000+01:00',
            status: 'confirmed',
            summary: "summary"
        }

        eventConverter = new EventConverter({ payload })
        userDao = new UserDAO()
    })

    test('Email should be valid', async () => {
        expect(eventConverter.emails?.length).toBeGreaterThan(0)
    })

    test('End date should be valid', async () => {
        expect(eventConverter.startDate).toBeInstanceOf(Date)
    })

    test('Start date should be valid', async () => {
        expect(eventConverter.endDate).toBeInstanceOf(Date)
    })

    test('Google id should be valid', async () => {
        expect(eventConverter.googleId).toEqual('MGptdjJ1ZDljMWo3Y2kyZzFqZ21ybWY2c3Mgbmlja0BnZW1iYW5pLmNvbQ')
    })

    test('Email client/employee should be valid', async () => {
        await factory.createMany('user', 5)

        expect(eventConverter.emailClients?.length).toBeGreaterThan(0)
        expect(eventConverter.emailEmployees?.length).toBeGreaterThan(0)
    })

    test('Email client/employee should be foudn in db', async () => {
        await factory.createMany('user', 5)

        expect((await userDao.getClientUsers(eventConverter.emailClients))?.length).toBeGreaterThan(0)
        expect((await userDao.getEmployeeUsers(eventConverter.emailEmployees))?.length).toBeGreaterThan(0)
    })

    test('Create booking with good payload', async () => {
        await factory.createMany('user', 5)

        const booking = await eventConverter.createBooking([
            ...(await userDao.getClientUsers(eventConverter.emailClients)),
            ...(await userDao.getEmployeeUsers(eventConverter.emailEmployees))
        ])

        expect(booking).not.toBeNull()
        expect(booking.users.length).toBeGreaterThan(0)
    })
})

afterAll(async () => {
    await cleanDb(db)
})