const Company = require("../models/CompanyModel");

// Simple CRUD Operations
const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: "Failed to create company." });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: "Company not found." });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve company." });
  }
};

const updateCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: "Company not found." });
    }
    await company.update(req.body);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: "Failed to update company." });
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: "Company not found." });
    }
    await company.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete company." });
  }
};

// Advanced CRUD Operations
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve companies." });
  }
};

// Export the CRUD operations as an object
module.exports = {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
};
