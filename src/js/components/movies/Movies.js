import React from 'react';
import Movie from '../../components/movie/Movie';
import MovieStore from '../../stores/MovieStore';
import Shoutouts from '../shoutouts/Shoutouts';
export default class Movies extends React.Component
{ 
    constructor()
    {
        super();
        this.state ={movies:MovieStore.getMovies()};
    }
        render()
    {
        const {movies} =this.state;
        const movieList = movies.map((movie)=>{
            return <Movie key={movie.episode_id} {...movie}/>
        })
        return(
            <div>
            <h2>Movies List</h2>
            <ul>{movieList}</ul>
            <Shoutouts/>
            </div>
        );
    }
}