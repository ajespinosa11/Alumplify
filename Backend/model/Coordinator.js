const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniCoordinator = new Schema ({
    Coordinator_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    Name: {
        require: true,
        type: String
    },
    Username: {
        require: true,
        type: String
    },
    Password: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('Coordinator', alumniCoordinator);