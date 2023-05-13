// Import Mongoose
const mongoose = require('mongoose');

// Subject Schema
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subjectCode: {
        type: String,
        required: true,
        unique: true
    }
});

// Student Schema [Add Child Referencing Here]
// You can create a test route that appends subject ids to subjects array of the student document, this will help you understand how child referencing works.
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true,
        unique: true
    },
    //Add Child Referencing For Subjects Here. 
    // subjects: []
});

// Create the models
const Subject = mongoose.model('Subject', subjectSchema);
const Student = mongoose.model('Student', studentSchema);

// Export the models
module.exports = { Subject, Student };