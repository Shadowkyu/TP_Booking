const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
factory = factoryGirl.factory
factory.setAdapter(adapter)

const User = require('../../models').User

factory.define('user', User, {
    displayName: factory.sequence((n) => `displayName${n}`),
    email: factory.sequence((n) => n % 2 ? `test${n}@client.com` : `test${n}@employee.com`),
    isClient: factory.sequence((n) => n % 2)
})