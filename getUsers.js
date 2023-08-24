const { UserModel } = require("./models/user");

const getUsers = (req, res) => {
  UserModel.find().then((users) => res.json(users));
};

module.exports = getUsers;
