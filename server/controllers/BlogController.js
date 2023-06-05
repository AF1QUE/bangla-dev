const BlogModel = require("../models/BlogModel");

// Define controller methods for blogs
const BlogController = {
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await BlogModel.findAll();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve blogs" });
    }
  },
  getBlogById: async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await BlogModel.findByPk(id);
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve blog" });
    }
  },
  createBlog: async (req, res) => {
    const { title, paragraph, image, date_posted, status, admin_id } = req.body;
    try {
      const newBlog = await BlogModel.create({
        title,
        paragraph,
        image,
        date_posted,
        status,
        admin_id,
      });
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: "Failed to create blog" });
    }
  },
  updateBlog: async (req, res) => {
    const { id } = req.params;
    const { title, paragraph, image, date_posted, status, admin_id } = req.body;
    try {
      const blog = await BlogModel.findByPk(id);
      if (blog) {
        await blog.update({
          title,
          paragraph,
          image,
          date_posted,
          status,
          admin_id,
        });
        res.json(blog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update blog" });
    }
  },
  deleteBlog: async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await BlogModel.findByPk(id);
      if (blog) {
        await blog.destroy();
        res.json({ message: "Blog deleted successfully" });
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete blog" });
    }
  },
};

module.exports = BlogController;
