const mongoose = require("mongoose");
const xlsx = require('xlsx');
mongoose.set("useFindAndModify", false);
// import and initiate the posts model to query the database
const User = mongoose.model("user");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get posts on route "/getPosts"
exports.getUser = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

exports.getUserEid = async (req, res) => {
  const user = await User.find({}, { employeeId: 1 });
  res.json(user);
};

// function to create a post
exports.createUser = async (req, res) => {
  // we use mongodb's save functionality here
  await new User(req.body).save((err, data) => {
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
exports.getSingleUser = async (req, res) => {
  // get id from URL by using req.params
  let userID = req.params.id;
  // we use mongodb's findById() functionality here
  await User.findById({ _id: userID }, (err, data) => {
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
exports.updateUser = async (req, res) => {
  // get a userID.
  // let userID = new ObjectID(req.params.id);
  let userID = req.params.id;
  console.log(userID);
  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await User.findByIdAndUpdate(
    { _id: userID },
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
exports.deleteUser = async (req, res) => {
  let userID = req.params.id;
  // we use mongodb's deleteOne() functionality here
  await User.deleteOne({ _id: userID }, (err, data) => {
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

exports.getUserByEid = async (req, res) => {
  let userEid = req.params.eid;
  await User.find({ employeeId: userEid }, (err, data) => {
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

exports.updateUserByEid = async (req, res) => {
  let userEID = req.params.eid;
  await User.findOneAndUpdate(
    { employeeId: userEID },
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

exports.deleteUserByEid = async (req, res) => {
  let userEID = req.params.eid;
  // we use mongodb's deleteOne() functionality here
  await User.deleteOne({ employeeId: userEID }, (err, data) => {
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

exports.syncUser = async (req,res) =>{
  try {
    let EMPLOYEE_FILE = process.env.EMPLOYEE_FILE
    let workbook = xlsx.readFile(EMPLOYEE_FILE)
    let sheet = workbook.Sheets['Sheet1']
    let employees  = xlsx.utils.sheet_to_json(sheet)
    for(let employee of employees){

      const userExists = await User.exists({ employeeId:employee['ID'] });
      if (!userExists) 
      {console.log("User does not exists");

      let query = {
        employeeId:employee['ID']
      }
      let updateData = {
        employeeId: employee['ID'],
        firstName: employee['First Name'] ,
        lastName: employee['Last Name'] ,
        email: employee['Email'],
        phoneNumber: employee['Contact No'],
        dateOfBirth: employee['DOB'] ,
        gender: employee['Gender'] ,
        departmentName: employee['Department'],
        designation:employee['Job Des'],
        salary: employee['Salary'],
        bankName: employee['Bank'],
        accountNumber:employee['A/c No'] ,
        ifscCode: employee['IFCS'],
        branchName: employee['Branch Name'] ,
        password: employee['Contact No'] ,
        accessType: employee['Job Des'].toLowerCase() ,
        address: null,
      }
      await User.update(query,updateData,{upsert:true})
    }
  else{
    console.log("User exists");
  }}
  res.status(200).send()

  } catch (error) {
    res.status(500).send({
      message:'unable to sync employees please try again'
    })
  }
}