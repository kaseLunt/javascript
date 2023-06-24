# Autocomplete.js

Autocomplete.js is a lightweight, customizable JavaScript package that provides autocomplete functionality for your web applications. In this application it uses the OMDB API to fetch and display movie data, allowing users to search for movies in an autocomplete dropdown menu.
```html
## Installation

Include the `autocomplete.js` file in your HTML file:


<script src="path-to-your-js-folder/autocomplete.js"></script>

## Usage

To use the autocomplete functionality, create a new autocomplete instance using the createAutoComplete function:


createAutoComplete({
  root: document.querySelector('#your-element-id'), // The root HTML element for the autocomplete
  renderOption: yourRenderOptionFunction, // Function to render each item in the dropdown
  onOptionSelect: yourOnOptionSelectFunction, // Function to execute when an option is selected
  inputValue: yourInputValueFunction, // Function to compute the value of the input when an option is selected
  fetchData: yourFetchDataFunction, // Function to fetch data based on the search term
});

## Functions

    renderOption(item): Renders the HTML for each item in the dropdown.
    onOptionSelect(item): Performs an action when an item is selected from the dropdown.
    inputValue(item): Returns the value to populate the input field when an item is selected.
    fetchData(searchTerm): Fetches the data to be displayed in the dropdown based on the search term.

## Example

Here's an example of how to use Autocomplete.js to create an autocomplete for movie search:


createAutoComplete({
  root: document.querySelector('#movie-search'),
  renderOption(movie) {
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `<img src="${imgSrc}" />${movie.Title} (${movie.Year})`;
  },
  onOptionSelect(movie) {
    console.log('Movie selected:', movie.Title);
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: searchTerm,
        apikey: 'your-omdb-api-key',
      },
    });
    return response.data.Search;
  },
});
