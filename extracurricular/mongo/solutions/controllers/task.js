// These are my solutions to the questions in exercises.txt
const Restaurant = require("../models/Restaurant");
module.exports = {
  taskOne: async (req, res) => {
    try {
      // For large documents we can use the lean() method to return a plain JavaScript object instead of a Mongoose document.

      // To limit the number of documents returned, we can use the limit() method. This method takes a number as an argument and returns the specified number of documents.
      const restaurants = await Restaurant.find({}).lean();
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskTwo: async (req, res) => {
    try {
      const restaurants = await Restaurant.find(
        {},
        { _id: 1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
      )
        .lean()
        .limit(10);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskThree: async (req, res) => {
    try {
      /*The Model.find() function takes 3 arguments that help you initialize a query without chaining. The first argument is the query filter (also known as conditions). The 2nd argument is the query projection, which defines what fields to include or exclude from the query. For example, in the query below we have been asked to exclude the _id */
      const restaurants = await Restaurant.find(
        {},
        { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
      )
        .lean()
        .limit(10);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskFour: async (req, res) => {
    try {
      const restaurants = await Restaurant.find(
        {},
        { _id: 1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
      )
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskFive: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({ borough: "Bronx" }).lean();
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskSix: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({ borough: "Bronx" })
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskSeven: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({ borough: "Bronx" })
        .lean()
        /*In Mongoose, the skip() method is used to specify the number of documents to skip. When a query is made and the query result is returned, the skip() method will skip the first n documents specified and return the remaining. */
        .skip(5)
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskEight: async (req, res) => {
    try {
      /*The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria. */
      const restaurants = await Restaurant.find({
        grades: { $elemMatch: { score: { $gt: 90 } } },
      })
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskNine: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        /*$lt selects the documents where the value of the field is less than (i.e. <) the specified value. */
        grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } },
      })
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskTen: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        address: { coord: { $lt: -95.754168 } },
      })
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
  taskEleven: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        cuisine: { $ne: "American " },
        grades: { $elemMatch: { score: { $gt: 70 } } },
        "address.coord": { $lt: -65.754168 },
      })
        .lean()
        .limit(5);
      if (!restaurants)
        return res.status(404).json({ message: "No restaurants found" });
      res.status(200).json(restaurants);
    } catch ({ message }) {
      res.status(500).json(`Error: ${message}`);
    }
  },
};
