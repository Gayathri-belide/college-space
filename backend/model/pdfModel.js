const mongoose = require('mongoose');
const pdfSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  title:String,
  contentType: String,
});

const PdfModel = mongoose.model('Pdfe', pdfSchema);

module.exports = PdfModel;
