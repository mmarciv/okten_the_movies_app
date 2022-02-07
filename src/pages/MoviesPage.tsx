import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import MoviesList from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;
