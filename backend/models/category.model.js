const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: { type: String },
  type: { type: String, required: true },
  count: { type: Number },
  imgUrl: { type: String },
});

module.exports = model("Category", categorySchema);
