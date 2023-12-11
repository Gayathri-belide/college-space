const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const u = require('./model/user');
const multer = require('multer');
const app = express();

app.use(cors());
const port = 5001;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/collegedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const PdfModel = require('./model/pdfModel');
const YourSchema = new mongoose.Schema({
  timeStamp: { type: String },
  answer: { type: String },
  answer2: { type: String },
  answer3: { type: String },
});
const Interviewschema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  contactno: { type: String },
  companyname: { type: String },
  package: { type: Number },
  rounds: { type: Number },
  coding: { type: String },
  csconcepts: { type: String },
  hr: { type: String },
  suggestions: { type: String },
  achievements:{type:String},
  projects:{type:String},
})
const noteschema = new mongoose.Schema({
  name: String,
  data: Buffer,
  title: String,
  contentType: String,
})
const Uschema=new mongoose.Schema({
  username:{type:String},
  password:{type:String},
  securityquestion:{type:String}
})
const Anschema = new mongoose.Schema({
  companyName: { type: String },
  description: { type: String },
  companyType: { type: String }, // Changed from 'type'
  websiteUrl: { type: String },
});

const NotModel = mongoose.model('NotModel', Anschema); // Changed from 'Notmodel'
app.post('/Add',async(req,res)=>
{
  try {
    const newP = new UModel({
      username: req.body.username,
      password: req.body.password,
      securityquestion: req.body.securityquestion, // Changed from 'type'
   
    });
    await newP.save();
    res.send({ success: true });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.send({ success: false });
  }
});
app.post('/company', async (req, res) => {
  try {
    const newP = new NotModel({
      companyName: req.body.companyName,
      description: req.body.description,
      companyType: req.body.companyType, // Changed from 'type'
      websiteUrl: req.body.websiteUrl,
    });
    await newP.save();
    res.send({ success: true });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.send({ success: false });
  }
});
app.get('/companyGet',async(req,res)=>
{try {
  const notes = await NotModel.find();
  res.json(notes);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
}
});
const Intmodel = mongoose.model('Intmodel', Interviewschema)
const YourModel = mongoose.model('YourModel', YourSchema);
const UModel=mongoose.model('UModel',Uschema)
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    const newPdf = new PdfModel({
      title: req.body.title,
      name: originalname,
      data: buffer,
      contentType: 'application/pdf',
    });
    await newPdf.save();

    res.send('File uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/note', async (req, res) => {
  try {
    const notes = await PdfModel.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/createUser', async (req, res) => {
  try {
    const newPdf = new u({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      contactno: req.body.contactno,
      startYear: req.body.startYear,
      branch: req.body.branch,
    });
    await newPdf.save();

    res.status(200).send('File uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: true });
  }
});
app.post('/createInt', async (req, res) => {
  try {
    const newPdf = new Intmodel(req.body);
    await newPdf.save();

    res.json({ success: true })
  } catch (error) {
    console.error(error);
    res.json({ success: false })
  }
});

app.post('/loginUser', async (req, res) => {
  let success = false
  const { name, password } = req.body;
  console.log(name, password)
  try {
    let user = await u.findOne({ name });
    console.log(name, password)
    if (!user) {
      return res.status(400).json({ success, error: "Try Log in with correct credentials" });
    }
    if (!(user.password == password)) {
      return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
    }
    res.json({ success: true })
  } catch (error) {
    console.error(error.message)
    res.send("Server Error")
  }
})

app.post('/register', async (req, res) => {
  let success = false
  const { username, password,securityquestion } = req.body;
  
  try {
    let user = await UModel.findOne({ username });
   
    if (!user) {
      return res.status(400).json({ success, error: "Try Log in with correct credentials" });
    }
    if (!(user.password == password ||user.securityquestion==securityquestion)) {
      return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
    }
    res.json({ success: true })
  } catch (error) {
    console.error(error.message)
    res.send("Server Error")
  }
})

app.get('/load', async (req, res) => {
  try {
    const data = await YourModel.find({});
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})
app.get('/interview', async (req, res) => {
  try {
    const data = await Intmodel.find({});
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
