const db = require("../models");

// Get User Service
exports.getUserService = async () => {
  const result = await Data.find({});
  return result;
};

// Save User Service
exports.saveUserService = async (reqData) => {
  const result = await db.User.create(reqData);

  // const data = new Data(reqData);
  // const result = await data.save();
  return result;
};
