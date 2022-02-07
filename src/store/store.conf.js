import {configureStore} from "@reduxjs/toolkit";

import {genreReducer} from "./genre.slice"

const store = configureStore({
    reducer: {
        genreReducer
    }
});

export default store;
