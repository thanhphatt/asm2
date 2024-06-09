const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema cho Projects
const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    leader_id: { type: Schema.Types.ObjectId, required: true },
    team: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    budget: { type: Number, required: true },
    status: { type: String, enum: ['ongoing', 'completed', 'pending'], required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
module.exports = mongoose.model('Project', projectSchema);
