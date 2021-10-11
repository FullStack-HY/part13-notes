const Note = require('./note')
const User = require('./user')

User.hasMany(Note)
Note.belongsTo(User)

module.exports = {
  Note, User
}