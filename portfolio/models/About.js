// models/about.js
import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  title: String,
  content: String,
  // Add more fields as needed
});

const About = mongoose.models.About || mongoose.model('About', aboutSchema);

export default About;

