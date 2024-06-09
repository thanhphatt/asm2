const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema cho Tasks
const taskSchema = new Schema({
    project_id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    assignee_id: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ['to do', 'in progress', 'done'], required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
    due_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Task', taskSchema);