const unknownEndpoint = (request, response) => {
  response
    .status(404)
    .send({
      error:
        "You have more than likely made the controller, so make sure you have exported it correctly.",
    });
};

module.exports = {
  unknownEndpoint,
};
