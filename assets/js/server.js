const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://junxi:junxi0312@cluster0.b67i9uo.mongodb.net/schooldb?retryWrites=true&w=majority");

const progSchema = {
  progID: String,
  name: String,
  level: String,
  price: Number,
  description: String,
  url: String
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

app.get('/search', async (req, res) => {
  try {
    const progs = await Prog.find({}).sort({price:1}).exec();
    res.render('db', {
      progList: progs
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5500, function () {
  console.log('server is running');
});
