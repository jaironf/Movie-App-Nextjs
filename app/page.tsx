import { FC } from "react";
import apiFetch from "./lib/apiFetch";
import { Movie, ServerParams } from "./types";
import WelcomeScreen from "./components/WelcomeScreen";
import MovieCards from "./components/MovieCards";

const Home: FC<ServerParams> = async ({ searchParams }) => {

 const getMovies = await apiFetch.getMovies({ searchParams })

const movies: Movie[] = getMovies.results;

  return (
    <main className="md:container mx-auto pt-5">
      <WelcomeScreen movies={movies}/>
      <MovieCards movies={getMovies}/>
    </main>
  );
}

export default Home