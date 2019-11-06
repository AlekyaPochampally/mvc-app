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
      SectionNumber: {
        type: String,
        minlength: 2,
        maxlength: 2,
        required: true,
        unique: true
      },
      Days: {
        type: String,
        minlength: 2,
        maxlength: 3,
        required: true,
        
        
      },
      StartTime: {
        type: String,
        minlength: 4,
        maxlength: 4,
        required: false,
       
      },
      RoomNumber: {
        type: String,
        required: true,
       
      },
      InstructorID: {
        type: Number,
        required: true,
      
      },
      CourseID: {
        type: Number,
        required: true,
        
      }
    })
    module.exports = mongoose.model('section', sectionSchema)
    