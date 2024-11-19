import { Movies } from "../types";

const { API_URL, AUTHORIZATION_TOKEN, BASE_URL} = process.env;

interface APIFetch {
    getMovies: () => Promise<Movies>
}

const apiFetch: APIFetch = {
    getMovies: async () => {
        try {
            const fetchMovies = await fetch(`${API_URL}/movie/popular`, {
                headers:{
                    AUTHORIZATION: `Bearer ${AUTHORIZATION_TOKEN}`
                }
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