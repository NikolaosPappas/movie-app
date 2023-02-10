import React from 'react';
//components

//styles
import {Content, Text } from './MovieInfo.styles';
// Types
import { MovieState } from '../../hooks/useMovieFetch';

type Props = {
  movie: MovieState,
}

const MovieInfo: React.FC<Props> = ({ movie }) => (
    <Content>
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.opening_crawl}</p>
          <div className='director'>
            <p>{movie.director}</p>
            
          </div>

      </Text>
    </Content>
);

export default MovieInfo;
