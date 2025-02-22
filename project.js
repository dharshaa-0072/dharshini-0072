const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Project', ProjectSchema);