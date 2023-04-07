const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
