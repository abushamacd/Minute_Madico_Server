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
    const result = await saveUserService(reqData);
    if (result === false) {
      res.status(200).json({
        success: false,
        message: `This email "${reqData.email}" already exist.`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Registration successfully`,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Registration failed`,
      error: error.message,
    });
  }
};
