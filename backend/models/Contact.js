const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true},
    phone_number: { type: Number, required: true },
    subject: { type: String,required: true },
    message: { type: String,required: true }, 
  },
  { timestamps: true }
);

var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact ;