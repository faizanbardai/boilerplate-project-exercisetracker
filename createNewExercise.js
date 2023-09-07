const { UserModel, ExerciseModel } = require("./models/user");

const createNewExercise = async (req, res) => {
  const { description, duration, date } = req.body;

  const exercise = new ExerciseModel({
    user: req.params.id,
    description,
    duration,
    date: date || new Date(),
  });

  const exRes = await exercise.save();

  const user = await UserModel.findById(req.params.id);

  res.json({
    _id: req.params.id,
    username: user.username,
    date: exRes.date,
    duration: exRes.duration,
    description: exRes.description,
  });
};

module.exports = createNewExercise;
