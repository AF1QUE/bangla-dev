const Job = require("../models/JobModel");

// Simple CRUD Operations
const createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create job.", errorMessage: error });
  }
};

const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found." });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve job." });
  }
};

const updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found." });
    }
    await job.update(req.body);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to update job." });
  }
};

const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found." });
    }
    await job.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job." });
  }
};

// Advanced CRUD Operations
const getAllJobs = async (req, res) => {
  const { featured } = req.query;

  try {
    let jobs;

    if (featured) {
      jobs = await Job.findAll({
        where: {
          featured: featured,
        },
      });
    } else {
      jobs = await Job.findAll();
    }

    res.json(jobs);
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).json({ error: "Failed to retrieve jobs." });
  }

  // try {
  //   const jobs = await Job.findAll();
  //   res.status(200).json(jobs);
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to retrieve jobs." });
  // }
};

const getFeaturedJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({
      where: { featured: "true" },
    });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve jobs." });
  }
};

// Export the CRUD operations as an object
module.exports = {
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getAllJobs,
};
