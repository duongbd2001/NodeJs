
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Student = new Schema({
    name : {type : String},
    age : {type : String},
    address : {type : String},
    phoneNumber : {type : String},
    email : {type : String},
    dob : {type : String}
});

module.exports = mongoose.model('Student', Student);
