// Asynchronous function to retrieve movie data from OMDB API
const fetchData = async (searchTerm) => {
  // Send a GET request to the OMDB API with the search term and API key as parameters
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '7d655279',
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input"/>
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"> </div>
    </div>
  </div>  
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove('is-active');
    return;
  }
  resultsWrapper.innerHTML = '';
  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const option = document.createElement('a');
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src = "${imgSrc}"/>
      ${movie.Title}
    `;

    resultsWrapper.appendChild(option);
  }
};

// Add an event listener to the input element to call the onInput function whenever the input value changes
input.addEventListener('input', debounce(onInput));

document.addEventListener('click', (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove('is-active');
  }
});
