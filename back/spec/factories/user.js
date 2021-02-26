const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
factory = factoryGirl.factory
factory.setAdapter(adapter)

const User = require('../../models/old_user')

factory.define('user', User, {
    displayName: factory.sequence((n) => `displayName${n}`),
    email: factory.sequence((n) => `email${n}`),
})