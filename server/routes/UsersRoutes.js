const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

// Routes for User CRUD operations
router
  .route("/users")
  .post(UsersController.createUser)
  .get(UsersController.getAllUsers);

router
  .route("/users/:id")
  .get(UsersController.getUserById)
  .put(UsersController.updateUserById)
  .delete(UsersController.deleteUserById);

module.exports = router;
