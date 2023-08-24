const { UserModel, ExerciseModel } = require("./models/user");

const createNewExercise = async (req, res) => {
  const { description, duration, date } = req.body;
  const user = await UserModel.findById(req.body[":_id"]).exec();

  const exercise = new ExerciseModel({
    user: user._id,
    description,
    duration,
    date: date || new Date(),
  });

  const exRes = await exercise.save();

  res.json(exRes);
};

module.exports = createNewExercise;
