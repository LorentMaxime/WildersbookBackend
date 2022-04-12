const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WilderSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model('wilder', WilderSchema);
