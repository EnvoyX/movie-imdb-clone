import { useMovieContext } from '../context/MovieContext';

const MovieModal = () => {
  const { selectedMovie, closeMovie } = useMovieContext();
  if (!selectedMovie) return null;
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-center items-center">
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
            className="mb-4 rounded-lg h-auto object-cover"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {selectedMovie.Title} ({selectedMovie.Year})
          </h2>
        </div>
        <div className="mb-4 bg-gray-600 rounded-lg p-3">
          <p className="text-base mb-2">
            <strong>Released:</strong> {selectedMovie.Released}
          </p>
          <p className="text-base mb-2">
            <strong>Genre:</strong> {selectedMovie.Genre}
          </p>
          <p className="text-base mb-2">
            <strong>Director:</strong> {selectedMovie.Director}
          </p>
          <p className="text-base mb-2">
            <strong>Actors:</strong> {selectedMovie.Actors}
          </p>
          <p className="text-base mb-2">
            <strong>IMDB Rating:</strong> {selectedMovie.imdbRating}
          </p>
          <p className="text-base mb-2">
            <strong>Released:</strong> {selectedMovie.Plot}
          </p>
        </div>
        <button
          onClick={closeMovie}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
