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
  Given: {
    type: String,
    required: false,
    default:"xxxx",
    unique: false
  },
  Family: {
    type: String,
    required: false,
    unique: true
    
  },
  Email: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'xxx@gmail.com'
  },
  GPA: {
    type: number,
    required: true,
    default: 0
  },
  GitHub: {
    type: String,
    required: true,
    
  },
  WebSite: {
    type: String,
    required: true,
    
  },
  SectionID: {
    type: String,
    required: true,
    
  }
})
module.exports = mongoose.model('student', studentSchema)
