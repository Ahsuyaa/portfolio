// models/about.js
import mongoose from 'mongoose';

const  EducationSchema = new mongoose.Schema({
  title: String,
 
  location: String,
     date: String,
     description: String,
});

const Education = mongoose.models.Education || mongoose.model('Education', EducationSchema);

export default Education;

