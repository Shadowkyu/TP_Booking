const { EventConverter } = require("../services/EventConverter")


describe('About EventConvert', () => {
    const payload = {
        attendees: [
            {
                displayName: 'Nick Stock',
                email: "client@client.com",
                organizer: true,
                response_status: 'accepted'
            },
            {
                displayName: 'Nicholas Stock',
                email: 'not_client@client.com',
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

    EventConverter.payload = payload

    test('Paylod should be set', async () => {
        expect(EventConverter.payload).toEqual(payload)
    })

    test('End date should be valid', async () => {
        expect(EventConverter.startDate).toBeInstanceOf(Date)
    })

    test('Start date should be valid', async () => {
        expect(EventConverter.endDate).toBeInstanceOf(Date)
    })

    test('Google id should be valid', async () => {
        expect(EventConverter.googleId).toEqual('MGptdjJ1ZDljMWo3Y2kyZzFqZ21ybWY2c3Mgbmlja0BnZW1iYW5pLmNvbQ')
    })
})