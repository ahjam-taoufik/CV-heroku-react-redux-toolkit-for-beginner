
import { createSlice } from '@reduxjs/toolkit';

const initState={chowCounter:true}


const toggleSlice= createSlice({
    name: 'toggle',
    initialState: initState,
    reducers: { 
        toggleCounter: (state) => {
            state.chowCounter = !state.chowCounter;
        }
    }
});

export const {toggleCounter}=toggleSlice.actions;

export default toggleSlice.reducer;





