const mongoose = require('mongoose');

// add local connection to MongoDB with mongoose
//ADD INSIDE .CONNECT()
mongoose.connect();

// export connection 
module.exports = mongoose.connection;

