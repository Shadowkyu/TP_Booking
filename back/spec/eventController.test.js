const { EventConverter } = require("../services/EventConverter")

describe('About EventConvert', () => {
    let eventConverter

    beforeAll(() => {
        const payload = {
            attendees: [
                {
                    displayName: 'Nick Stock',
                    email: "test@client.com",
                    organizer: true,
                    response_status: 'accepted'
                },
                {
                    displayName: 'Nicholas Stock',
                    email: 'test@employee.com',
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
})