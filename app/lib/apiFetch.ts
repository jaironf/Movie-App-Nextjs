import { MovieById, Movies, ServerParams } from "../types";

const { API_URL, AUTHORIZATION_TOKEN, BASE_URL} = process.env;

const APIconfig: RequestInit = {
    headers:{
        Authorization: `Bearer ${AUTHORIZATION_TOKEN}`
    },
    cache: 'no-store'
}

interface APIFetch {
    getMovies: ({ searchParams }: ServerParams) => Promise<Movies>
    getMoviebyId: (id: string) => Promise<MovieById>

}

const apiFetch: APIFetch = {
    getMovies: async ({ searchParams }) => {

        const buildURL = new URL(`${API_URL}`)
        const buildParams = new URLSearchParams('')

        if(searchParams.query) {
            buildParams.set('query', searchParams.query)
            buildURL.pathname = buildURL.pathname + '/search/movie'
        } else {
            buildURL.pathname = buildURL.pathname + '/movie/popular'

        }

        try {
            const fetchMovies = await fetch(`${buildURL}?${buildParams}`, APIconfig)

            if(fetchMovies.status !== 200) throw new Error('Error fetching data from the Api')
          
            
            const data: Movies = await fetchMovies.json()

            return data
        } catch (error) {
            console.error(error);
            return {} as Movies
            
        }
    },
    getMoviebyId: async id => {
        try {
            const getMoviebyId = await fetch(`${API_URL}/movie/${id}`, APIconfig)

            if(getMoviebyId.status !== 200) throw new Error('Error fetching data from the Api')

            const data: MovieById = await getMoviebyId.json()

            return data
        } catch (error) {
            console.error(error);
            return{} as MovieById
            
        }
    }
}

export default apiFetch