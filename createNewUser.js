const { UserModel } = require("./models/user");

const createNewUser = async (req, res) => {
  const { username } = req.body;
  let user = await UserModel.findOne({ username });
  if (user) res.json(user);
  else {
    user = new UserModel({ username });

    user.save().then((user) => {
      res.send(user);
    });
  }
};

module.exports = createNewUser;
