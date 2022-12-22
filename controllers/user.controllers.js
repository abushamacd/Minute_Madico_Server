const {
  getUserService,
  saveUserService,
} = require("../services/user.services");

// Get API
exports.getUser = async (req, res, next) => {
  try {
    const queryData = req.query;
    const result = await getUserService(queryData);

    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't get`,
      error: error.message,
    });
  }
};

// Save API
exports.saveUser = async (req, res, next) => {
  try {
    // Save
    const reqData = req.body;
    console.log(reqData);
    const result = await saveUserService(reqData);

    res.status(200).json({
      success: true,
      message: `Data inserted successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data inserted failed`,
      error: error.message,
    });
  }
};
