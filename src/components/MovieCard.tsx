type MovieCardProps = {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
  onClick: () => void;
};

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const { Title, Year, Poster } = movie;
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 p-4 rounded-lg shadow-md cursor-pointer flex flex-col hover:scale-105 hover:border transition-all "
    >
      <img src={Poster} alt={Title} className="rounded-lg" />
      <h3 className="text-white mt-2 text-lg font-bold">{Title}</h3>
      <p className="text-gray-400">{Year}</p>
    </div>
  );
};

export default MovieCard;
