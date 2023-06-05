const express = require("express");
const router = express.Router();
const JobController = require("../controllers/JobController");

// Routes for Job CRUD operations
router
  .route("/jobs")
  .post(JobController.createJob)
  .get(JobController.getAllJobs);

router
  .route("/jobs/:id")
  .get(JobController.getJobById)
  .put(JobController.updateJobById)
  .delete(JobController.deleteJobById);

module.exports = router;
