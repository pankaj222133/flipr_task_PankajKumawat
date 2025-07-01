// const Project = require("../models/Project");

// // Get all projects
// exports.getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find();
//         res.json(projects);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Add a project
// exports.addProject = async (req, res) => {
//     const { name, description } = req.body;
//     //   const image = req.file ? req.file.path : ""; // Handle image upload

//     const project = new Project({ name, description });
//     try {
//         const savedProject = await project.save();
//         res.status(201).json(savedProject);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };


const Project = require('../models/Project');

// @desc Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create a new project
const createProject = async (req, res) => {
  const { image, name, description } = req.body;

  if (!image || !name || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newProject = new Project({ image, name, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProjects,
  createProject,
};
