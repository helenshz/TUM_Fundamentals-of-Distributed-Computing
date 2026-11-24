const { MongoClient } = require("mongodb");

// Read the connection string from the .env file (.env is git-ignored, so the password is never committed)
// Example .env content: MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/
process.loadEnvFile();
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("my_database");
    console.log("Database accessed.");
    console.log(database);
    const movies = database.collection("movies");
    console.log("Collection accessed.");
    console.log(movies);

    newMovie = { title: "Back to the Future", year: "1985", director: "Robert Zemeckis" };
    // Insert a movie
    await movies.insertOne(newMovie);
    console.log("Movie inserted.");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future", year: "1985" };
    const movie = await movies.findOne(query);
    if (movie) {
      console.log("Movie found.");
      console.log(movie);
      console.log("Title: " + movie.title + ", Year: " + movie.year + ", Director: " + movie.director);
    } else {
      console.log("Movie not found.");
    }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Connection closed");
  }
}

run().catch(console.dir);
