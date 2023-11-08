// Import the required modules
const express = require("express"); // Express.js framework for creating a web server
const path = require("path"); // Path module for working with file and directory paths
const app = express(); // Create an Express application
const PORT = process.env.PORT || 3001; // Define the port for the server, defaulting to 3001 if not provided in the environment

const api = require("./routes/index.js"); // Import the API routes from an external file

app.use(express.json()); // Enable JSON request body parsing
app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded data
app.use('/api', api); // Mount the API routes under the '/api' path

app.use(express.static('public')); // Serve static files from the 'public' directory

// Define a GET route for the root path ('/') that serves the index.html file
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Define a GET route for the '/notes' path that serves the notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the Express server and listen on the specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
