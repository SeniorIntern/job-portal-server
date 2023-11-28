const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
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
  address: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
  },
  logo_url: {
    type: String,
    minlength: 6,
    maxlength: 255,
    required: true,
  },
});

const Company = mongoose.model("platforms", companySchema);

module.Company = Company;
