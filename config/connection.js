const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/mysocialDB';

connect(connectionString);

module.exports = connection;

/* const mongoose = require('mongoose');

// add local connection to MongoDB with mongoose
mongoose.connect('mongodb://127.0.0.1:27017/mysocialDB');

// export connection 
module.exports = mongoose.connection;
 */