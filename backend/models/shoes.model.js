const { model, Schema } = require("mongoose");

const shoesSchema = new Schema({
  name: { type: String },
  type: { type: String, required: true },
  count: { type: Number },
  imgUrl: { type: String },
});

module.exports = model("Shoes", shoesSchema);
