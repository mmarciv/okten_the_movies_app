import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {genreService} from "../services/genre.service";


export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await genreService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null;
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        }
    }
});

const genreReducer = genreSlice.reducer;

export {genreReducer};
