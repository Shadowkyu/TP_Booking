const { UserDAO } = require('./services/userDao')
;
(async () => {
    console.log(await (new UserDAO()).getClientUsers())
})()
