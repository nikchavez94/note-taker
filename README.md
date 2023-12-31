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

<img width="774" alt="Screenshot 2023-11-07 at 10 29 32 PM" src="https://github.com/nikchavez94/note-taker/assets/128064997/41d20621-6b26-4eec-ac15-151978f9218a">
<img width="819" alt="Screenshot 2023-11-07 at 10 31 11 PM" src="https://github.com/nikchavez94/note-taker/assets/128064997/6af57b0e-8cf5-477c-86d0-b7efaa244ba7">
