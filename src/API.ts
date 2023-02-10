import {
  API_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

// Types
export type Movie = {
  title: string,
  episode_id: number,
  director: string,
  opening_crawl: string,
}

export type Movies = {
  results: Movie[],
  count: number,
  next: number,
  previous:number
}


const apiSettings = {
  fetchMovies: async (): Promise<Movies> => {
    const endpoint: string = `${API_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint: string = `${API_URL}`;
    return await (await fetch(endpoint)).json();
  }
 
};

export default apiSettings;
