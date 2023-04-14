const isFriend = (currentUser, person) =>
  currentUser.friends
    .map((f) => f._id.toString())
    .includes(person._id.toString());

module.exports = {
  isFriend,
};
