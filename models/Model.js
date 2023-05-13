const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Subject schema
const subjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
});

// Define the Student schema
const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  roll: {
    type: String,
    required: true
  },
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});

// Create the models
const Subject = mongoose.model('Subject', subjectSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Subject, Student };
