const mongoose = require('mongoose')

// TODO: change
// const url =
// 'mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery',false)
mongoose.connect(url)

const metaDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  Token: String,
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
      const { name, email, Token } = req.body;
      const metadata = new MetaData({
        name,
        email, 
        Token,
      });
      try {
        await metadata.save();
        res.status(200).json({ message: 'User saved successfully' });
      } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: 'Error saving User' });
      }
      // break;
    } 
    // case 'GET':
    else{
      const Token = req.query;
      try{
        const User = await MetaData.findOne(Token);
        if (!User) {
          res.status(404).json({ message: 'No user found' });
        } else {
          res.status(200).json(User);
        }
      } catch (error) {
        console.error( error);
        res.status(500).json({ message: 'Error retrieving user data' });
      }
      // break;
    }
  // }
};