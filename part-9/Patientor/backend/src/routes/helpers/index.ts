import { Response } from "express";

// Create a new interface that extends the built-in Error interface and adds a 'message' property to it.
interface ErrorWithMessage extends Error {
  message: string;
}

// Define a function that takes in an Express response object and an unknown error object and handles it.
const errorHandler = (res: Response, error: unknown) => {
  // Initialize the error message to a generic error message.
  let errorMessage = "Something went wrong.";

  // If the error object is an instance of the built-in Error interface, extract the error message and append it to the error message string.
  if (error instanceof Error) {
    // Cast the error object to the custom ErrorWithMessage interface to access the 'message' property.
    const errorWithMessage = error as ErrorWithMessage;
    errorMessage += ` Error: ${errorWithMessage.message}`;
  }

  // Send the error message with a 400 status code as the response.
  res.status(400).send(errorMessage);
};

// Export the errorHandler function to be used in other modules.
export default errorHandler;
