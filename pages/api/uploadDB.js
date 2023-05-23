const mongoose = require('mongoose')

const url =
'mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery',false)
mongoose.connect(url)

const metaDataSchema = new mongoose.Schema({
  user: String,
  dateUploaded: Date,
  postId: String,
  cloudinaryLink: String,
});

let MetaData;

try {
  MetaData = mongoose.model('MetaData');
} catch (error) {
  MetaData = mongoose.model('MetaData', metaDataSchema);
}

export default async (req, res) => {
  // switch (req.method)  {
    if (req.method === 'POST') {
      const { user, dateUploaded, postId, cloudinaryLink } = req.body;
      const video = new MetaData({
        user,
        dateUploaded,
        postId,
        cloudinaryLink,
      });

      try {
        await video.save();
        res.status(200).json({ message: 'Video metadata saved successfully' });
      } catch (error) {
        console.error("Error creating video metadata: ", error);
        res.status(500).json({ message: 'Error saving video metadata' });
      }
      // break;
    } 
    // case 'GET':
    else{
      const postId = req.query;
      try{
        const video = await MetaData.findOne(postId);
        if (!video) {
          res.status(404).json({ message: 'No video found' });
        } else {
          res.status(200).json(video);
        }
      } catch (error) {
        console.error( error);
        res.status(500).json({ message: 'Error retrieving video metadata' });
      }
      // break;
    }
  // }
};