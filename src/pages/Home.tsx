import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";

const Home = () => {
  const selectedMovie = false;
  return (
    <div className="min-h-screen bg-gray-600 text-white">
      <SearchBar></SearchBar>
      <MovieList></MovieList>
      {selectedMovie && <MovieModal></MovieModal>}
    </div>
  );
};

export default Home;
