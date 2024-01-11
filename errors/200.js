const { CustomError } = require('./200');

// In your application logic, when you want to throw a custom error:
try {
  // Some code that might throw an error
  throw new CustomError('This is a custom error message', 200);
} catch (error) {
  if (error instanceof CustomError) {
    // Handle the custom error
    console.error(`Custom Error: ${error.message}`);
    // Respond with the appropriate HTTP status code (200 in this case)
  } else {
    // Handle other types of errors
    console.error(`Unexpected Error: ${error.message}`);
    // Respond with an appropriate status code (e.g., 500 for internal server error)
  }
}
