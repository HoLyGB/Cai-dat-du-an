// app.js
const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(express.json());

// Routes
app.use("/api/contacts", contactsRouter);

// Handle 404
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Handle errors
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
