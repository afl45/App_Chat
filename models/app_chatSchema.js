const mongoose = require('mongoose');

const AppChatSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, 

{ timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    }
});

const AppChat = mongoose.model('AppChat', AppChatSchema);

module.exports = AppChat;
