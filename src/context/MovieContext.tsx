import { createContext, useState, useContext } from "react";
import { searchMovies, getMovieDetails } from "../api/omdbApi";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

interface MovieDetail extends Movie {
  Plot: string;
  Genre: string;
  Director: string;
  Released: string;
  Actors: string;
  imdbRating: string;
}

interface MovieContextType {
  movies: Movie[];
  selectedMovie: MovieDetail | null;
  searchMovies: (query: string) => Promise<void>;
  selectMovie: (id: string) => Promise<void>;
  closeMovie: () => void;
}

// Create Context
const MovieContext = createContext<MovieContextType | undefined>(undefined);

//  Provider props
type MovieProviderProps = {
  children: React.ReactNode;
};

// Create Provider
export const MovieProvider = ({ children }: MovieProviderProps) => {
  // state from movies
  const [movies, setMovies] = useState<Movie[]>([]);
  // state selected movies
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);

  const searchMovieHandler = async (query: string) => {
    const result = await searchMovies(query);
    setMovies(result || []);
  };

  const selectMovieHandler = async (id: string) => {
    const movieDetails = await getMovieDetails(id);
    setSelectedMovie(movieDetails);
  };

  const closeMovieHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieContext.Provider
      value={{
        movies: movies,
        selectedMovie: selectedMovie,
        searchMovies: searchMovieHandler,
        selectMovie: selectMovieHandler,
        closeMovie: closeMovieHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hooks for useContext
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext muse be used within a MovieProvider");
  }
  return context;
};
