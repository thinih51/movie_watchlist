import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("ScreenStackDB"); // select database

//////////////////////////////////////////
// Movies
//////////////////////////////////////////

// Get all movies
async function getMovies() {
  let movies = [];
  try {
    const collection = db.collection("movies");

    const query = {};
    movies = await collection.find(query).toArray();
    movies.forEach((movie) => {
      movie._id = movie._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return movies;
}

// Get movie by id
async function getMovie(id) {
  let movie = null;
  try {
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    movie = await collection.findOne(query);

    if (!movie) {
      console.log("No movie with id " + id);
    } else {
      movie._id = movie._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return movie;
}

async function createMovie(movie) {
  movie.poster = "/images/placeholder.jpg"; // Default-Poster
  movie.actors = [];
  movie.watchlist = false;

  try {
    const collection = db.collection("movies");
    const result = await collection.insertOne(movie);
    return result.insertedId.toString(); // ObjectId als String zurückgeben
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Update movie
async function updateMovie(movie) {
  try {
    let id = movie._id;
    delete movie._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: movie });

    if (result.matchedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete movie by id
async function deleteMovie(id) {
  try {
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Export all functions
export default {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};