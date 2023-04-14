const { Person } = require("../Database/models/person");
const getPersonByName = async (name) => {
  const person = await Person.findOne({ name });
  if (!person) {
    throw new GraphQLError("Person not found", {
      extensions: {
        code: "BAD_USER_INPUT",
        invalidArgs: name,
        invalidMessage: "Person not found",
      },
    });
  }
  return person;
};

module.exports = {
  getPersonByName,
};
