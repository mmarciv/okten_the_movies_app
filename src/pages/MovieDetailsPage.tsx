import React, {useEffect} from 'react';
import MoviesListCard from "../components/MoviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovieDetails, getMoviesByGenre, getPopularMovie} from "../store/movie.slice";
import {mediaURL} from "../configs/urls";

import "./MovieDetailsPage.css"
import {IMovie} from "../models/Movie";
import {IGenre} from "../models/Genre";

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
        <div>
            {movie &&
                <div className={'page'}>
                    <div className={'page__img'}>
                        <img src={mediaURL + movie.poster_path} alt="" width="400"/>
                    </div>
                    <div className={'page__movie__info'}>
                        <div className={''}>
                            <h2>{movie.title}</h2>
                            <div>{movie.overview}</div>
                            <h3>Genres</h3>
                            <div>
                                {movie.genres && movie.genres.map((ganre: IGenre) => {
                                    return <div>{ganre.name}</div>
                                })}
                            </div>
                            <h3>Vote range</h3>
                            <div>{movie.vote_average}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MoviesDetailsPage;
