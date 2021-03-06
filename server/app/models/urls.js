const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlsSchema = new Schema({
  url: {
    type: String,
  },
  token: {
    type: String,
    unique: true,
  },
  watch: {
    type: Number,
  },
});

module.exports = mongoose.model("Urls", UrlsSchema);
