const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers");

router
  .route("/")
  /**
   * @api {get} /
   * @apiDescription Get all user
   * @apiPermission all
   */
  .get(userControllers.getUser)
  /**
   * @api {post} /bulk-delete
   * @apiDescription Sava user
   * @apiPermission all
   */
  .post(userControllers.saveUser);

module.exports = router;
