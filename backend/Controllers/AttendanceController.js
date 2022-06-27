const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Attendance = mongoose.model("attendance");

exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

exports.getAttendance = async (req, res) => {
  const attendance = await Attendance.find();
  res.json(attendance);
};

exports.addAttendance = async (req, res) => {
  await new Attendance(req.body).save((err, data) => {
    if (err) {
      // if there is an error send the following response
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      // if success send the following response
      res.status(200).json({
        message: "Post Created",
        data,
      });
    }
  });
};

exports.deleteAttendance = async (req, res) => {
  await Attendance.deleteMany({}, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Deleted",
      });
    }
  });
};
