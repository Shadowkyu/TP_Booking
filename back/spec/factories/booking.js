const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
factory = factoryGirl.factory
factory.setAdapter(adapter)

const Booking = require('../../models/booking')

factory.define('booking', Booking, {
    googleId: factory.sequence((n) => `googleId${n}`),
    startDate: factory.sequence((n) => `startDate${n}`),
    endDate: factory.sequence((n) => `endDate${n}`),
})