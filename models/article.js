const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: String, required: true },
  snippet: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Book", articleSchema);

module.exports = Article;
