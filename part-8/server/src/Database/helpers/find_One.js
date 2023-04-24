const find_One = async (model, key, value) => {
  const data = await model.findOne({ [key]: value });
  return data;
};

module.exports = { find_One };
