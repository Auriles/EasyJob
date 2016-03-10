var mongoose = require('mongoose'),
    Schema = mongoose.Schema; // Create Schema Mongoose


var schema = new Schema({
    name: {type: String, required: true},
    firstName: {type: String, required: true},
    email: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Export Model User table to Mongoose
exports.model = mongoose.model('User', schema, 'users'); 