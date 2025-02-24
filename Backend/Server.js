const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if different
  password: "", // Add your MySQL password
  database: "noteease",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Routes

// Create a new note

app.post("/notes", (req, res) => {
  const { title, description } = req.body;
  const sql = "INSERT INTO notes (title, description) VALUES (?, ?)";
  db.query(sql, [title, description], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note created successfully", id: result.insertId });
  });
});

// Get all notes
app.get("/notes", (req, res) => {
  db.query("SELECT * FROM notes", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Update a note
app.put("/notes/:id", (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const sql = "UPDATE notes SET title = ?, description = ? WHERE id = ?";
  db.query(sql, [title, description, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note updated successfully" });
  });
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM notes WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note deleted successfully" });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
