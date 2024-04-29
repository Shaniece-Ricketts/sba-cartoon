Cartoon API
Description
The Cartoon API is a RESTful API that allows users to manage cartoons, characters, and episodes. It provides endpoints for performing CRUD operations on these resources.

Available Routes
Cartoons
GET /cartoons: Retrieve all cartoons.
GET /cartoons/:id: Retrieve a specific cartoon by ID.
POST /cartoons: Create a new cartoon.
PUT /cartoons/:id: Update an existing cartoon.
DELETE /cartoons/:id: Delete a cartoon.
Characters
GET /characters: Retrieve all characters.
GET /characters/:id: Retrieve a specific character by ID.
POST /characters: Create a new character.
PUT /characters/:id: Update an existing character.
DELETE /characters/:id: Delete a character.
Episodes
GET /episodes: Retrieve all episodes.
GET /episodes/:id: Retrieve a specific episode by ID.
POST /episodes: Create a new episode.
PUT /episodes/:id: Update an existing episode.
DELETE /episodes/:id: Delete an episode.
How to Use
Ensure Node.js and MongoDB are installed on your system.
Clone this repository to your local machine.
Install dependencies by running npm install in the project directory.
Set up environment variables by creating a .env file based on the provided .env.example file.
Start the server by running npm start or node app.js.
Use tools like Postman to send HTTP requests to the API endpoints.
Environment Variables
PORT: The port number on which the server will listen.
DB_URL: The URL of the MongoDB database.
Sample Data
The application is pre-populated with sample data for testing purposes. You can find sample documents for cartoons, characters, and episodes in the scripts directory.

Contributors
Shaniece Ricketts
