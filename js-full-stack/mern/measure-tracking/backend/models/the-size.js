mongoose = require('mongoose');
Schema = mongoose.Schema;

theSizeSchema = new Schema({
  arm: Number,
  belt: Number,
  calf: Number,
  chest: Number,
  measureType: String,
  saveData: Date,
  stomach: Number,
  thigh: Number,
  waist: Number,
});

module.exports = mongoose.model('TheSize', theSizeSchema);
