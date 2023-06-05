const User = require("../models/UsersModel");

// Simple CRUD Operations
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, gender, dateOfBirth } =
      req.body;
    const newUser = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      gender,
      date_of_birth: dateOfBirth,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user." });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, gender, dateOfBirth } =
      req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    user.first_name = firstName;
    user.last_name = lastName;
    user.email = email;
    user.password = password;
    user.gender = gender;
    user.date_of_birth = dateOfBirth;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user." });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user." });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users." });
  }
};

// Export the CRUD operations as an object
module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
};
