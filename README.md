# NoteTaker

## How the Code Works: The code is organized into multiple files to improve code modularity and maintainability.
noteRoutes.js
This file defines API routes for managing notes.
It imports necessary modules and functions for working with files and generating UUIDs.
It defines the following routes:
GET /notes: Retrieves a list of user's notes from the 'db.json' file.
POST /notes: Creates a new note and appends it to the 'db.json' file.
DELETE /notes/:noteID: Deletes a note by its ID from the 'db.json' file.
server.js
This file creates an Express.js application and sets up the server.
It serves static files from the 'public' directory, including HTML files.
It mounts API routes under the '/api' path.
It defines two GET routes for serving the index.html and notes.html files.
It listens on a specified port, defaulting to 3001.
utils.js
This file provides utility functions for working with files.
It exports functions for reading from files, writing to files, and appending data to files.
index.js
This file acts as an entry point for API routes.
It imports noteRoutes.js and mounts those routes under the root path.
This structure makes it easy to expand the application and maintain the code in a clean and organized manner.

## License 
MIT License

## Contributors 
Rice Tutoring sessions, ChatGPT, Rice Bootcamp Courses and professors 
