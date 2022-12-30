const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  address: Object,
  borough: String,
  cuisine: String,
  grades: Array,
  name: String,
  restaurant_id: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
