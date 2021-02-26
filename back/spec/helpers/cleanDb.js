const cleanDb = async (db) => {
    await db.User.destroy({ where: {}, truncate: true })
    await db.Booking.destroy({ where: {}, truncate: true })
}
module.exports = cleanDb