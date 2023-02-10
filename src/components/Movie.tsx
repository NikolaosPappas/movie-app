import React from 'react';
import { useParams } from 'react-router';

//components
import Grid from './Grid';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
//hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie: React.FC = () => {
  const {movieId} = useParams();
  const { state: movie, error } = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
