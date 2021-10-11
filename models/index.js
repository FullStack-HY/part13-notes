const Note = require('./note')
const User = require('./user')

Note.sync()
User.sync()

module.exports = {
  Note, User
}