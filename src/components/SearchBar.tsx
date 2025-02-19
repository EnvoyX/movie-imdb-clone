import { useMovieContext } from '../context/MovieContext';
import { useState } from 'react';

const SearchBar = () => {
  const { searchMovies } = useMovieContext();
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4">
      <input
        type="text"
        className="bg-gray-800 text-white px-4 py-2 w-full rounded-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal-600 py-2 px-4 rounded-lg text-white hover:border hover:scale-105
         transition-all cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
