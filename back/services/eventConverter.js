const { UserDAO } = require("./userDao")
const db = require('../models')


module.exports.EventConverter = class EventConverter {
    payload = {}
    /** @private */
    clientDomain = "@client.com"
    /** @private */
    employeeDomain = "@employee.com"

    constructor({ payload }) {
        this.payload = payload
        this.userDao = new UserDAO()
    }

    /**
     * @param {any[]} users 
     */
    async createBooking(users) {
        const booking = await db.Booking.create(this.toHash)

        for (const user of users)
            await booking.addUsers(user.id)

        await booking.save()

        return db.Booking.findByPk(
            booking.id,
            {
                include: [
                    {
                        model: db.User,
                        as: "users"
                    }
                ],
            }
        )
    }

    get endDate() {
        return new Date(this.payload.end)
    }

    get startDate() {
        return new Date(this.payload.start)
    }

    /**
     * @returns {string[]}
     */
    get emails() {
        return this.payload.attendees.map(x => x.email)
    }

    /**
     * @returns {string[]}
     */
    get emailClients() {
        return this.emails.filter(x => /** @type {string} */(x).endsWith(this.clientDomain))
    }

    /**
     * @returns {string[]}
     */
    get emailEmployees() {
        return this.emails.filter(x => /** @type {string} */(x).endsWith(this.employeeDomain))
    }

    get googleId() {
        return (new URL(this.payload.html_link)).searchParams.get('eid')
    }

    get toHash() {
        return {
            googleId: this.googleId,
            startDate: this.startDate,
            endDate: this.endDate,
        }
    }
}