const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('List', listSchema);