const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
// import and initiate the posts model to query the database
const LeaveRequest = mongoose.model("leave_request");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get posts on route "/getPosts"
exports.getLeave = async (req, res) => {
  const leaves = await LeaveRequest.find();
  res.json(leaves);
};

// function to create a post
exports.createLeave = async (req, res) => {
  // we use mongodb's save functionality here
  await new LeaveRequest(req.body).save((err, data) => {
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

// function to get a single post
exports.getSingleLeave = async (req, res) => {
  // get id from URL by using req.params
  let leaveID = req.params.id;
  // we use mongodb's findById() functionality here
  await LeaveRequest.findById({ _id: leaveID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};

// function to update a single post
exports.updateLeave = async (req, res) => {
  // get a postID.
  let leaveID = req.params.id;

  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await LeaveRequest.findByIdAndUpdate(
    { _id: leaveID },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "Post Updated",
          data,
        });
      }
    }
  );
};

// function to delete a post from the DB
exports.deleteLeave = async (req, res) => {
  let leaveID = req.params.id;
  // we use mongodb's deleteOne() functionality here
  await LeaveRequest.deleteOne({ _id: leaveID }, (err, data) => {
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

exports.updateLeaveByEid = async (req, res) => {
  // get a postID.
  let leaveID = req.params.eid;
  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await LeaveRequest.findOneAndUpdate(
    { employeeId: leaveID },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "Post Updated",
          data,
        });
      }
    }
  );
};
