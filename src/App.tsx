import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";

function App() {
  return (
    <MovieProvider>
      <Home></Home>
    </MovieProvider>
  );
}

export default App;
