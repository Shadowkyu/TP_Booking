/*const Sequelize = require('sequelize')

const db = new Sequelize('tp_booking','root','root',{
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'

});

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });*/
const EventConverter = require('./services/eventConverter').EventConverter

EventConverter.payload = {
    attendees: [{
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

console.log(EventConverter)
