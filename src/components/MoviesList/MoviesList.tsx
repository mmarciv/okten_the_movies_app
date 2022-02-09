import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesByGenre, getPopularMovie} from "../../store/movie.slice";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../models/Movie";
import "./MoviesList.css"
import {useParams} from "react-router-dom";

const MoviesList = () => {

    const {genreId} = useParams();
    const [genreName, setGenreName] = useState('Popular');

    const page = 1;
    const results = [];
    const total_pages = 0;
    const total_results = 0;

    const {movies, movie} = useSelector((state: any) => {
        return state['movieReducer'];
    });

    const {genres, status, error} = useSelector((state: any) => {
        return state['genreReducer'];
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (genreId) {
            // @ts-ignore
            dispatch(getMoviesByGenre({id: genreId}));
            getGenreName(genreId);
        } else {
            dispatch(getPopularMovie());
            setGenreName("Popular");
        }
    }, [genreId]);

    const getGenreName = (genreId: any) => {
        if (genres) {
            if (genres) {
                const genre = genres.find((value:any) => value.id === +genreId)
                if (genre) {
                    setGenreName(genre.name);
                } else {
                    setGenreName("Popular");
                }
            }
        }
        return 'Popular';
    }

    return (
        <>
            <h1>{genreName}</h1>
            <div className={'movies-list'}>
                {movies && movies.results && movies.results.map((card: IMovie) => {
                    return <MoviesListCard key={card.id} card={card}/>
                })}
            </div>
        </>
    );
};

export default MoviesList;
