import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesByGenre, getPopularMovie} from "../../store/movie.slice";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../models/Movie";
import "./MoviesList.css"
import {useParams} from "react-router-dom";

const MoviesList = () => {

    const {genreId} = useParams();

    const page = 1;
    const results = [];
    const total_pages = 0;
    const total_results = 0;

    const {movies, movie} = useSelector((state: any) => {
        return state['movieReducer'];
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (genreId) {
            // @ts-ignore
            dispatch(getMoviesByGenre({id: genreId}));
        } else {
            dispatch(getPopularMovie());
        }
    }, [genreId]);

    return (
        <div className={'movies-list'}>
            {movies.toString()}
            {movies && movies.results && movies.results.map((card: IMovie) => {
                return <MoviesListCard key={card.id} card={card}/>
            })}
        </div>
    );
};

export default MoviesList;
