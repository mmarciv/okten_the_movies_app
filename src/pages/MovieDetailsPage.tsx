import React, {useEffect} from 'react';
import MoviesListCard from "../components/MoviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovieDetails, getMoviesByGenre, getPopularMovie} from "../store/movie.slice";

const MoviesDetailsPage = () => {

    const {movieId} = useParams();
    const dispatch = useDispatch();

    const {movies, movie} = useSelector((state: any) => {
        return state['movieReducer'];
    });

    useEffect(() => {
        if (movieId) {
            // @ts-ignore
            dispatch(getMovieDetails({id: movieId}));
        }
    }, [movieId]);

    return (
        <div className={''}>
            {movie && <MoviesListCard card={movie}/>}
        </div>
    );
};

export default MoviesDetailsPage;
