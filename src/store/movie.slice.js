import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services/movie.service";


export const getPopularMovie = createAsyncThunk(
    'movieSlice/getPopularMovie',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await movieService.getPopular();
            return movies;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async ({id}, {dispatch}) => {
        try {
            return await movieService.getById(id);
        } catch (e) {
            return e.message;
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({id}, {dispatch}) => {
        try {
            return await movieService.getByGenreId(id);
        } catch (e) {
            return e.message;
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        movie: null,
    },
    reducers: {},
    extraReducers: {
        [getPopularMovie.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.movie = action.payload;
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export {movieReducer};
