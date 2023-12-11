const s="mongodb://localhost:27017/collegedb"
const mongoose = require('mongoose');
const connectToMongo = async () => {
  try {
    await mongoose.connect(s, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      
    });
    console.log('Connected to MongoDB');
}
catch(error){}}
module.exports = connectToMongo;