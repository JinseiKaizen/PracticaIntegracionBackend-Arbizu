const { Schema, model } = require("mongoose");

const collectionName = "chat";

const collectionSchema = new Schema({
  email: String,
  mensaje: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;