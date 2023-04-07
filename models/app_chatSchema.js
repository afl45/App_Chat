const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model('User', UserSchema);

module.exports = User;
