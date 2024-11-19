import { Movies, ServerParams } from "../types";

const { API_URL, AUTHORIZATION_TOKEN, BASE_URL} = process.env;

interface APIFetch {
    getMovies: ({ searchParams }: ServerParams) => Promise<Movies>
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
            const fetchMovies = await fetch(`${buildURL}?${buildParams}`, {
                headers:{
                    AUTHORIZATION: `Bearer ${AUTHORIZATION_TOKEN}`
                },
                cache: 'no-store'
            })

            if(fetchMovies.status !== 200) throw new Error('Error fetching data from the Api')
            
            const data: Movies = await fetchMovies.json()

            return data
        } catch (error) {
            console.error(error);
            return {} as Movies
            
        }
    }
}

export default apiFetch