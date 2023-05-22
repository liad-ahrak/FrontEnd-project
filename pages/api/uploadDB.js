import mongoose from 'mongoose';


const url =
'mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

let Note;

try {
  Note = mongoose.model('Note');
} catch (error) {
  Note = mongoose.model('Note', noteSchema);
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const { content, important } = req.body;

    const note = new Note({
      content,
      important,
    });

    try {
      await note.save();
    } catch (error) {
        console.error("Error creating note: ", error);
    }
  }
};