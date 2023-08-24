const { UserModel, ExerciseModel } = require("./models/user");

const getLogs = async (req, res) => {
  const { _id } = req.params;

  const user = await UserModel.findById(_id);

  const logs = await ExerciseModel.find()
    .where({ user: _id })
    .select("description duration date")
    .limit(0);
  const resObj = {
    username: user.username,
    count: logs.length,
    _id,
    log: logs.map((log) => ({
      description: log.description,
      duration: log.duration,
      date: new Date(log.date).toDateString(),
    })),
  };

  res.send(resObj);
};

module.exports = getLogs;
