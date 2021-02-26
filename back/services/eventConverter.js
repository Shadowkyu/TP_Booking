const { UserDAO } = require("./userDao")

module.exports.EventConverter = class EventConverter {
    payload = {}

    constructor({ payload }) {
        this.payload = payload
        this.userDao = new UserDAO()
    }

    // async get client() {
    //     await this.userDao.getClientUsers()
    // }

    get endDate() {
        return new Date(this.payload.end)
    }

    get startDate() {
        return new Date(this.payload.start)
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