import { Movie } from "./types";
import apiFetch from "./lib/apiFetch";
import WelcomeScreen from "./components/WelcomeScreen";
import MovieCards from "./components/MovieCards";


export default async function Home() {

 const getMovies = await apiFetch.getMovies()

const movies: Movie[] = getMovies.results;

  return (
    <main className="md:container mx-auto pt-5">
      <WelcomeScreen movies={movies}/>
      <MovieCards movies={getMovies}/>
    </main>
  );
}
