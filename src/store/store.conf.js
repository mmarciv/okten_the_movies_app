import {configureStore} from "@reduxjs/toolkit";

import {genreReducer} from "./genre.slice"
import {movieReducer} from "./movie.slice"

const store = configureStore({
    reducer: {
        genreReducer,
        movieReducer
    }
});

export default store;
