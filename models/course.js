/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
   
  _id: {
    type: Number,
    required: true
    
  },
  SchoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    unique: true
  },
  CourseNumber: {
    type: String,
    minlength: 3,
    maxlength: 3,
    required: false,
    unique: true
    
  },
  Name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'xxx'
  },
  inSpring: {
    type: String,
    required: true,
    default: false
  },
  inSummer: {
    type: String,
    required: true,
    default: false
  },
  inFall: {
    type: String,
    required: true,
    default: false
  }
})
module.exports = mongoose.model('course', courseSchema)
