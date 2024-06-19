const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Users
const userSchema = new Schema({
  
    username: { type: String, required: true },
    email: { type: String, required: true },
<<<<<<< Updated upstream
    image: { type: String, required: false },
    role: { type: String, enum: ['admin', 'user'], required: true }, // Include 'user' in enum
    team: { type: String, required: true },
    
    created_at: { type: Date, default: Date.now },
});
=======
    // image: { type: String, required: false },
    role: { type: String, enum: ['admin', 'user'], required: true },
    team: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now }
  });
>>>>>>> Stashed changes

module.exports = mongoose.model('User', userSchema);
