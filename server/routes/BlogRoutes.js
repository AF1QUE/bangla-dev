const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");

router
  .route("/")
  .get(BlogController.getAllBlogs)
  .post(BlogController.createBlog);

router
  .route("/:id")
  .get(BlogController.getBlogById)
  .put(BlogController.updateBlog)
  .delete(BlogController.deleteBlog);

module.exports = router;
