const db = require("../models");
var bcrypt = require("bcryptjs");

// To hash a password:
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0//", salt);

// To check a password:
// bcrypt.compareSync("B4c0//", hash); // true
// bcrypt.compareSync("not_bacon", hash); // false

// Get User Service
exports.getUserService = async () => {
  const result = await Data.find({});
  return result;
};

// Save User Service
exports.saveUserService = async (reqData) => {
  // check the email
  const emailExist = await checkEmail(reqData);
  if (emailExist) {
    return false;
  } else {
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(reqData.password, salt);
    reqData.password = hashPassword;

    // create user
    const result = await db.User.create(reqData);
    return result;
  }
};

// function
const checkEmail = async (user) => {
  let findUser = await db.User.findOne({
    where: {
      email: user.email,
    },
  });
  if (findUser) {
    return true;
  } else {
    return false;
  }
};
