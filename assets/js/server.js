const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://junxi:junxi0312@cluster0.b67i9uo.mongodb.net/schooldb?retryWrites=true&w=majority");

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

const Prog = mongoose.model('Programmes', progSchema);

app.get('/', async (req, res) => {
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

app.listen(5500, function () {
  console.log('server is running');
});
