// Debounce function to limit the frequency of function execution
const debounce = (func) => {
  let timeoutId; // Variable to hold the ID of the setTimeout function
  return (...args) => {
    // If a timeout is already set, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Set a new timeout to call the function after a delay of 1 second
    timeoutId = setTimeout(() => {
      func.apply(null, args); // Call the function with the provided arguments
    }, 1000);
  };
};
