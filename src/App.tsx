import { useEffect } from "react";
import { getMovieDetails, searchMovies } from "./api/omdbApi";

function App() {
  useEffect(() => {
    searchMovies("Avengers");
    getMovieDetails("tt0848228");
  }, []);
  return (
    <section className="text-3xl font-bold underline">Movie Imdb Clone</section>
  );
}

export default App;
