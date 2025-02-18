const API_KEY = `${import.meta.env.VITE_APIKEY}`;
const BASE_URL = `${import.meta.env.VITE_BASEURL}`;

// Function fo find movie based on title

export const searchMovies = async (query: string) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  console.log(data.Search);
  return data.Search;
};

// function to get detail movie based on ID

export const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data;
};
