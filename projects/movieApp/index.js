// Asynchronous function to retrieve movie data from OMDB API
const fetchData = async (searchTerm) => {
  // Send a GET request to the OMDB API with the search term and API key as parameters
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7d655279",
      s: searchTerm,
    },
  });
  // Log the data received from the API to the console
  console.log(response.data);
};

// Select the input element from the DOM
const input = document.querySelector("input");

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

// Create a debounced version of the onInput function
const onInput = debounce((event) => {
  fetchData(event.target.value); // Fetch data based on the input value
});

// Add an event listener to the input element to call the onInput function whenever the input value changes
input.addEventListener("input", onInput);
