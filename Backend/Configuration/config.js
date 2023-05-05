const port = process.env.PORT || 5001

const localDB = 'mongodb://localhost:27017/football-friends'

const currentDB = process.env.MONGODB_URI || localDB

module.exports = {currentDB, localDB, port}