import {createSlice} from '@reduxjs/toolkit'
import { toggleCounter } from './ToggleSlice';


const initStat = { count: 0} ;

 const counterSlice = createSlice({
    name: 'counter',
    initialState: initStat,
    reducers: {
        increase: (state, action) => {
            state.count += action.payload;
        },
        decrease: (state, action) => {
            state.count -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(toggleCounter, (state, action) => {
                state.count = action.payload;
            })
        
        }

});



export const {increase,decrease}=counterSlice.actions;

 export default counterSlice.reducer;
