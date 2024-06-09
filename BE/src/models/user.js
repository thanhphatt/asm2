const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema cho Users
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ['leader', 'employee'], required: true },
    team: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('User', userSchema);
