// models/UploadedFile.js
const mongoose = require('mongoose');

const uploadedFileSchema = new mongoose.Schema({
  originalname: String,
  fileData: Buffer, // Store file content as binary data
});

module.exports = mongoose.models.UploadedFile || mongoose.model('UploadedFile', uploadedFileSchema);
