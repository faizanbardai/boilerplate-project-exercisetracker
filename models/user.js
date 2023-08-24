require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_DB_URI);

const exerciseSchema = new Schema({
  description: String,
  duration: Number,
  date: Date,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const userSchema = new Schema({
  username: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }],
});

const UserModel = mongoose.model("User", userSchema);

const ExerciseModel = mongoose.model("Exercise", exerciseSchema);

exports.UserModel = UserModel;
exports.ExerciseModel = ExerciseModel;
