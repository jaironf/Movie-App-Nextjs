import { SVGProps } from "react"

type SVGprops = SVGProps<SVGSVGElement>

interface SVGIcon extends SVGprops {
    size?: number
}

// Datos películas
interface Movies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  
  interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface MovieCard {
    movies: Movies
  }


  interface movieParams {
    query: string
    page: string
  }

  interface ServerParams {
    searchParams: movieParams
  }


  interface MovieById {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Productioncompany {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }

  interface MovieModalProps {
    movie: {
      title: string;
      overview: string;
      imageUrl: string;
    };
  }