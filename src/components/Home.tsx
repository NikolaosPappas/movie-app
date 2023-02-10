import React from 'react';
//components
import Grid from './Grid';
import Button from './Button';
import { Text } from './Home.styles';
//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home: React.FC = () => {
  const {
    state,
    isLoading,
    isError,
    setIsLoadingMore
  } = useHomeFetch();

  console.log(state);

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      <Grid header={'Star Wars'}>
        {state.results.map(movie => (
          <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.opening_crawl}</p>
            <div className='director'>
              <p>{movie.director}</p>
            </div>
  
        </Text>
        ))}
      </Grid>
      {state.page < state.total_pages && !isLoading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  );
};

export default Home;
