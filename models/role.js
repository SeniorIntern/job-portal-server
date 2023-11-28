// models/genre.js
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
  },
});

const Role = mongoose.model("roles", roleSchema);

module.exports = Role;
module.exports = roleSchema;
