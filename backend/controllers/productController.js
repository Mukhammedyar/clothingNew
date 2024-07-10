const productModel = require("../models/product.model");

class ProductController {
  async getAll(req, res) {
    try {
      const product = await productModel.find();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async create(req, res) {
    try {
      const product = await productModel.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async edit(req, res) {
    try {
      const { productId } = req.params;
      const updatedData = req.body;
      const updatedProduct = await productModel.findByIdAndUpdate(
        productId,
        updatedData,
        { new: true, runValidators: true } // Return the updated document
      );
      if (!updatedProduct) {
        return res.status(404).send("Product not found");
      }
      res.status(200).send(updatedProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async delete(req, res) {
    try {
      const { productId } = req.params;
      const deletedProduct = await productModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).send("Product not found");
      }
      res.status(200).send(req.params);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async cleanupUnwantedDocuments(req, res) {
    try {
      await productModel.deleteMany({
        $or: [
          { name: { $exists: false } },
          { sizes: { $exists: false } },
          { imgUrl: { $exists: false } },
          { color: { $exists: false } },
          { type: { $exists: false } },
          { complection: { $exists: false } },
          { related: { $exists: false } },
        ],
      });
      res.status(200).send("Unwanted documents deleted successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteAll(req, res) {
    try {
      await productModel.deleteMany({});
      res.status(200).send("All categories deleted successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new ProductController();
