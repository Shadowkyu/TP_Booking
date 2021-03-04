const cleanDb = async (db) => {
    await db.User.destroy({ where: {}, truncate: { cascade: true } })
    await db.Booking.destroy({ where: {}, truncate: { cascade: true } })
}
module.exports = cleanDb