// Fetches data from the OMDB API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7d655279",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");

let timeoutId;

// Delays API call until user stops typing for 1 second
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
