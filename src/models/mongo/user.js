const { Schema, model } = require("mongoose");

const collectionName = "user";

const collectionSchema = new Schema({
  nombre: String,
  apellido: String,
  email: {
    unique: true,
    type: String,
    required: true
  },
  edad: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  photo: String,
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;