const { GraphQLError } = require("graphql");

const handleMutationError = (args, error, message) => {
  throw new GraphQLError(message, {
    extensions: {
      code: "BAD_USER_INPUT",
      invalidArgs: args.name,
      invalidMessage: message,
      error,
    },
  });
};

module.exports = {
  handleMutationError,
};
