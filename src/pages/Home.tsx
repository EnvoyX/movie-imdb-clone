import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieModal from '../components/MovieModal';
import { useMovieContext } from '../context/MovieContext';

const Home = () => {
  const { movies, selectedMovie } = useMovieContext();
  return (
    <div className="min-h-screen bg-gray-600 text-white">
      <h1 className="text-3xl font-bold text-center px-4 py-2 ">Endlix</h1>
      <SearchBar></SearchBar>
      {movies.length > 0 ? (
        <MovieList></MovieList>
      ) : (
        <h1 className="text-gray-500 mt-4 text-center">No movies found.</h1>
      )}
      {selectedMovie && <MovieModal></MovieModal>}
    </div>
  );
};

export default Home;
