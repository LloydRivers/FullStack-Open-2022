// ...
const getTokenFrom = (request) => {
  console.log("request", request);
  const authorization = request.get("authorization");
  console.log("authorization", authorization);
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

module.exports = {
  getTokenFrom,
};
