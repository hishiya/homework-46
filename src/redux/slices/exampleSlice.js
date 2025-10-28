import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '../asyncActions/fetchData';

const initialState = {
    data: [],
    status: 'idle', 
    error: null,
};

const exampleSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder

        .addCase(fetchTodos.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })

        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })

        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});

export default exampleSlice.reducer;