class EventConverter {
    payload = {}

    set payload(data) {
        this.payload = data
    }

    get endDate() {
        return new Date(this.payload.end)
    }
    get startDate() {
        return new Date(this.payload.start)
    }
    get googleId() {
        return (new URL(this.payload.html_link)).searchParams.get('eid')
    }

}

module.exports.EventConverter = new EventConverter()