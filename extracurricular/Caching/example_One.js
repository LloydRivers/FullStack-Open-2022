const axios = require("axios");

// Variable to keep track of the number of fetch calls
let fetchCount = 0;

/* Memoization function: 

Memoization is a technique used in computing to speed up the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This technique is often used in functions that are computationally expensive or have side effects, such as network requests.
 
*/
function memoize(fn) {
  /* Cache object:

  A cache object is a data structure that stores recently accessed data in a way that it can be quickly retrieved the next time it is needed. In the context of web development, caching is often used to speed up the performance of web applications by reducing the number of requests that need to be made to external resources, such as APIs or databases. When data is requested, it is first checked in the cache object, and if it is found there, it is returned immediately without having to make a new request.
  
  */
  const cache = {};

  return async function (key, ...args) {
    // Check if the result is already cached
    if (cache[key]) {
      return cache[key];
    }

    // Increment the fetch count
    fetchCount++;

    // Fetch the data and store the result in the cache
    return (cache[key] = await fn(...args));
  };
}

// Function to fetch dogs data, memoized using the memoize function
const fetchDogs = memoize(function (page) {
  // If the page is not a number, set it to 1
  if (typeof page !== "number") page = 1;

  // Perform the API request using axios
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      // Return the data from the response
      return response.data.message;
    })
    .catch((err) => {
      // Throw the error if any occurs
      throw err;
    });
});

// Function to start the fetching process
async function start() {
  try {
    // Fetch dogs data
    let dogs = await fetchDogs(`dogs_page_11`);
    return dogs;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error(`Error: ${err.message}`, err);
  }
}

// Execute the start function multiple times
start()
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then(() => start())
  .then((dogs) => {
    // Log the fetched dogs and the fetch count
    console.log(`Fetched dogs`, dogs);
    console.log(`Fetched ${fetchCount} times`);
  });
