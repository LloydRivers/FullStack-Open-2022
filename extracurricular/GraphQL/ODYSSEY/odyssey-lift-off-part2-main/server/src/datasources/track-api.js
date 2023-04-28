// Import the RESTDataSource class from the @apollo/datasource-rest package
const { RESTDataSource } = require("@apollo/datasource-rest");

// Define a new class called TrackAPI that extends the RESTDataSource class
class TrackAPI extends RESTDataSource {
  // Set the baseURL property to the URL of the API that this class will communicate with
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  // Define a method called getTracksForHome that retrieves all tracks from the API
  getTracksForHome() {
    return this.get("tracks");
  }

  // Define a method called getAuthor that retrieves a specific author's information from the API
  // The author's ID is passed in as an argument to the method
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

// Export the TrackAPI class so that it can be used in other parts of the application
module.exports = TrackAPI;
