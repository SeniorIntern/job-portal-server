// models/game.js
const mongoose = require("mongoose");
const roleSchema = require("./role");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  company: {
    type: roleSchema,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  quialifications: {
    type: new mongoose.Schema({
      experience: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
      },
      skills: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
      },
    }),
  },
  salary: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
  },
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
