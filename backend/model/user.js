const mongoose = require('mongoose')
const { Schema } = mongoose;
const user = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contactno: { type: String, required: true },
    startYear: { type: String, required: true },
    branch: { type: String, required: true }
});
module.exports = mongoose.model('user', user);