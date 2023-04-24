// const updatedAuthor = await findOneAndUpdate('Author', { name: args.name }, { born: args.setBornTo });
const mongoose = require("mongoose");
async function findOneAndUpdate(modelName, searchParam, updateParam, options) {
  const model = mongoose.model(modelName);
  let result;

  if (updateParam) {
    result = await model.findOneAndUpdate(searchParam, updateParam, {
      new: true,
      ...options,
    });
  } else {
    result = await model.findOne(searchParam, options);
  }

  return result;
}

module.exports = { findOneAndUpdate };
