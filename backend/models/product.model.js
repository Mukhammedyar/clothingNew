const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  categoryType: { type: String, required: true },
  colors: [
    {
      title: { type: String },
      detailsTitle: { type: String, required: true },
      detailsText: { type: String, required: true },
      compositionTitle: { type: String, required: true },
      compositionText: { type: String, required: true },
      color: { type: String, required: true },
      colorCode: { type: [String], required: true },
      sizes: { type: [String], required: true },
      description: { type: String },
      imgUrl: { type: String, required: true },
      complect1: [
        {
          name: { type: String, required: true },
          describtion: { type: String },
          color: { type: String, required: true },
          sizes: { type: [String], required: true },
          imgUrl: { type: String, required: true },
        },
      ],
    },
  ],
});

module.exports = model("Product", productSchema);
