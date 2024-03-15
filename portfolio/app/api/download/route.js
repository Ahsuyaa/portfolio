// pages/api/upload.js

import multer from 'multer';
import nextConnect from 'next-connect';
import mongoose from 'mongoose';

// Connect to your MongoDB instance
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FileSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  size: Number,
});

const File = mongoose.model('File', FileSchema);

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('files'));

apiRoute.post(async (req, res) => {
  try {
    const files = req.files;
    const fileData = [];

    for (const file of files) {
      const { originalname, mimetype, buffer } = file;
      const newFile = new File({
        filename: originalname,
        mimetype,
        size: buffer.length,
      });

      await newFile.save();
      fileData.push(newFile);
    }

    res.status(200).json({ message: 'Files uploaded successfully!', files: fileData });
  } catch (error) {
    res.status(500).json({ error: 'File upload failed' });
  }
});

export default apiRoute;
