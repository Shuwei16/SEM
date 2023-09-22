const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve static files (including HTML) from the "public" directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.static('public'));

// Set the views directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://junxi:junxi0312@cluster0.b67i9uo.mongodb.net/schooldb?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

const progSchema = {
  progID: String,
  name: String,
  level: String,
  price: Number,
  description: String,
  CareerProspects:String,
  Duration:String,
  MinimumRequirement:String,
  ProgrammeOutline:String
}

const questionSchema = new mongoose.Schema({
  name: String,
  phoneNum: String,
  email: String,
  question: String,
  status: String
}, {
  versionKey: false // Disable the "__v" field
});

const Prog = mongoose.model('Programmes', progSchema);
const Ques = mongoose.model('questions', questionSchema);

app.get('/', async (req, res) => {
  res.setHeader("Content-Security-Policy", "img-src 'self' data:;");
  try {
    const progs = await Prog.find({}).sort({progID:1}).exec();
    res.render('db', {
      progList: progs
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/sort', async (req, res) => {
  try {
    const progs = await Prog.find({}).sort({price:-1}).exec();
    res.render('sort', {
      progList: progs
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post('/result', async (req, res) => {
  try {
    const { course1, course2 } = req.body;

    // Find the data for the selected courses
    const progs = await Prog.find({ $or: [{ name: course1 }, { name: course2 }] }).exec();

    if (progs.length !== 2) {
      // Handle the case where one or both courses were not found
      console.log('Course 1:', course1);
      console.log('Course 2:', course2);
      return res.status(404).json({ error: 'Selected courses not found.', course1, course2 });
    }

    // Render the 'result' EJS template with the data
    res.render('result', {
      course3: progs[0],
      course4: progs[1],
    });

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/compare', async (req, res) => {
    res.render('comparison');
});

app.get('/search', async (req, res) => {
  res.render('search');
});

app.get('/trying', async (req, res) => {
  res.render('trying');
});

app.get('/question', async (req, res) => {
  res.render('question');
});

app.post('/updateStatus', async (req, res) => {
  const {name} = req.body;

  const updatedQuestion = await Ques.updateOne(
    { name }, // Match documents where 'name' matches the provided name
    { $set: { status: 'Solved' } } // Set the 'status' field to 'Solved'
  );

  const questions = await Ques.find({}).sort({ name: 1 }).exec();

  res.render('searchResult', {
    quesList: questions,
  });
});

app.get('/questionPage', async (req, res, next) => {
  try {
    const questions = await Ques.find({}).sort({ name: 1 }).exec();
    if (questions.length === 0) {
      // No questions found, you can log or handle this case as needed
      console.log("No questions found.");
    } else {
      res.render('questionStatus', {
        quesList: questions,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post('/questionStatus', async (req, res) => {
  try {
    const { questionName, questionEmail, questionPhoneNum, questionResponse } = req.body;
    // Input the data
    let myobj = new Ques({
      name: questionName,
      phoneNum: questionPhoneNum,
      email: questionEmail,
      question: questionResponse,
      status: 'Pending'
    });
    myobj.save();
  } catch (error) {
    console.error("Error handling /questionStatus:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.post('/searchResult', async (req, res) => {
  try {
    const {searchText} =req.body;

  // Find the data for the selected courses with the searchText
  const searchs = await Prog.find({ $or: [{name:{'$regex': searchText,$options: 'i'}},{level: {'$regex': searchText,$options: 'i'}},{description: {'$regex': searchText,$options: 'i'}},{CareerProspects: {'$regex': searchText,$options: 'i'}},{Duration: {'$regex': searchText,$options: 'i'}},{MinimumRequirement: {'$regex': searchText,$options: 'i'}},{ProgrammeOutline: {'$regex': searchText,$options: 'i'}}] }).exec();

    // Render the 'search' EJS template with the data
    res.render('searchResult', {
      searchList: searchs,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// app.listen(5502, function () {
//   console.log('server is running');
// });

// Start your Express server
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});
