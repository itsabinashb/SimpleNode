const mongoose = require('mongoose')
const {Schema} = mongoose

const authorSchema = new mongoose.Schema({
    quote: String,
    author: String
})

// Creating the collection
exports.authors = mongoose.model('authors', authorSchema)

//exports.authors // exporting the collection