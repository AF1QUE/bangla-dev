const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/CompanyController");

// Routes for Company CRUD operations
router
  .route("/companies")
  .post(CompanyController.createCompany)
  .get(CompanyController.getAllCompanies);

router
  .route("/companies/:id")
  .get(CompanyController.getCompanyById)
  .put(CompanyController.updateCompanyById)
  .delete(CompanyController.deleteCompanyById);

module.exports = router;
