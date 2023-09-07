const { UserModel, ExerciseModel } = require("./models/user");

const getLogs = async (req, res) => {
  const { _id } = req.params;

  const user = await UserModel.findById(_id);

  const { from, to, limit } = req.query;

  const logs = ExerciseModel.find().where({ user: _id });

  if (to && from) logs.where("date").gte(from).lte(to);

  logs.select("description duration date");

  if (limit) logs.limit(limit);

  logsData = await logs.exec();

  const resObj = {
    username: user.username,
    count: logsData.length,
    _id,
    log: logsData.map((log) => ({
      description: log.description,
      duration: log.duration,
      date: new Date(log.date).toDateString(),
    })),
  };

  res.send(resObj);
};

module.exports = getLogs;
